// cd response body type
interface CDInfo {
  cdId?: string;
  myCdId?: number;
  title: string;
  artist: string;
  releaseDate: string;
  genres: string[];
  coverUrl: string;
  youtubeUrl: string;
  album?: string;
  duration: number;
}

// cd 검색시 spotify 반환 type
interface CDSearch {
  id: string;
  name: string;
  artists: { name: string; id: string }[]; // 가수 정보가 배열로 옴
  album: {
    name: string;
    release_date: string;
    images: { url: string }[]; // 앨범 이미지도 배열
  };
  genres: string[];
  youtubeUrl: string;
  duration: number;
}

// cd 검색후 response type
interface CDSearchResult {
  id: string;
  title: string;
  artist: string;
  album_title: string;
  date: string;
  imageUrl: string;
  genres: string[];
  type: 'CD';
  youtubeUrl: string;
  duration: number;
}

// cd 추가시 reqest body type
interface PostCDInfo {
  title: string;
  artist: string;
  album: string;
  genres: string[];
  coverUrl: string;
  youtubeUrl: string;
  duration: number;
  releaseDate: string;
}

// template type

interface TemplateProps {
  isEditable: () => void;
  templateData: {
    comment1: string | null;
    comment2: string | null;
    comment3: string | null;
    comment4: string | null;
  };
}

// cd comments

interface CdComment {
  id?: number;
  myCdId: number;
  userId: number;
  nickname: string;
  timestamp: string;
  content: string;
  createdAt?: string;
}

interface CdCommentPost {
  timestamp: string;
  content: string;
}
