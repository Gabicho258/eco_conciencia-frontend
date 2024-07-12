export interface IPost {
  _id: string;
  user_id: string;
  title: string;
  description: string;
  photos_url: string[];
  labels: string[];
  district: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
}
