export type User = {
  id: number;
  auth_id: string; // UUID
  name: string;
  age?: number;
  location?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;

  posts: Post[];
  replies: Reply[];
  rooms: Room[];
  likes: Like[];
  calls: Call[];
  profileImages: Picture[];
  sentMessages: Message[];
  callsAsCaller: Call[];
  callsAsReceiver: Call[];
};

export type Tag = {
  id: number;
  name: string;

  posts: Post[];
  replies: Reply[];
};

export type Post = {
  id: number;
  text: string;
  is_voice: boolean;
  userId: number;
  user: User;

  pictures: Picture[];
  replies: Reply[];
  likes: Like[];
  tags: Tag[];
  calls: Call[];
};

export type Reply = {
  id: number;
  text: string;
  postId: number;
  userId: number;
  parentId?: number; // 親リプライのID
  user: User;
  post: Post;

  pictures: Picture[];
  likes: Like[];
  tags: Tag[];
};

export type Room = {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  participants: User[];
  messages: Message[];
  calls: Call[];
};

export type Message = {
  id: number;
  roomId: number;
  senderId: number;
  text: string;
  is_voice: boolean;
  createdAt: Date;

  room: Room;
  sender: User;
  pictures: Picture[];
};

export type Call = {
  id: number;
  callerId: number;
  receiverId: number;
  roomId?: number;
  postId?: number;
  startTime: Date;
  endTime?: Date;

  caller: User;
  receiver: User;
  room?: Room;
  post?: Post;
};

export type Picture = {
  id: number;
  url: string;
  entityId: number;

  post?: Post;
  reply?: Reply;
  message?: Message;
  user?: User;
};

export type Like = {
  id: number;
  userId: number;
  entityId: number;

  user: User;
  post?: Post;
  reply?: Reply;
};
