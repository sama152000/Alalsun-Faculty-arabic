export interface SectorPost {
  id: string;
  sectorId: string;
  title: string;
  content: string;
  excerpt?: string;
  imageUrl?: string;
  author: string;
  publishedDate: string;
  isPublished: boolean;
  tags?: string[];
  category?: string;
  createdAt: string;
  updatedAt: string;
}
