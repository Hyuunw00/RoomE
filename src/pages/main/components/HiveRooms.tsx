import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoomLighting } from '../../../components/room-models/RoomLighting';
import { roomAPI } from '../../../apis/room';
import HiveRoomModel from '../HiveRoomModel';
import useHexagonGrid from '../hooks/useHexagonGrid';
import useRooms from '../hooks/useRooms';

export default function HiveRooms({ myUserId }: HiveRoomsProps) {
  const { rooms } = useRooms(30, myUserId);
  const positionedRooms = useHexagonGrid(rooms, 0, 0);
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleRoomClick = async (hostId: number) => {
    try {
      await roomAPI.visitedRoomByUserId(myUserId, hostId);
      navigate(`/room/${hostId}`);
    } catch (error) {
      console.error('방문 처리 중 오류 발생:', error);
    }
  };

  return (
    <div className='w-full h-screen relative'>
      <Canvas
        camera={{ position: [0, 4, 10], fov: 25 }}
        shadows>
        <RoomLighting />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {positionedRooms.map(({ room, position }, index:number) => (
          <group
            key={index}
            position={position}
            onPointerOver={() => setHoveredRoom(index)}
            onPointerOut={() => setHoveredRoom(null)}
            onClick={() => handleRoomClick(room.userId)}>
            <HiveRoomModel
              room={room}
              position={position}
            />
          </group>
        ))}
        <OrbitControls
          enableRotate={false}
          enableZoom={true}
          enablePan={true}
          minDistance={5}
          maxDistance={18}
          mouseButtons={{ RIGHT: THREE.MOUSE.PAN }}
        />
      </Canvas>
      <div
        className='absolute bottom-22 left-1/2 transform -translate-x-1/2 font-medium'
        style={{
          padding: '8px 20px',
          background: 'rgba(47, 71, 131, 0.4)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          borderRadius: '40px',
          fontSize: '14px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          opacity: hoveredRoom !== null ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out',
        }}>
        {hoveredRoom !== null
          ? `✊🏻 똑똑! ${rooms[hoveredRoom]?.nickname}의 방에 들어가실래요?`
          : ''}
      </div>
    </div>
  );
}
