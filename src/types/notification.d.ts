interface Notification {
  notificationId: number;
  type: 'GUESTBOOK' | 'MUSIC_COMMENT' | 'EVENT' | 'HOUSE_MATE' | 'POINT';
  senderId: number;
  senderNickName: string;
  senderProfileImage: string;
  targetId: number;
  content?: string;
  createdAt: string;
  isRead: boolean;
}

 interface NotificationResponse {
  notifications: Notification[];
  hasNext: boolean;
  nextCursor: string;
}
