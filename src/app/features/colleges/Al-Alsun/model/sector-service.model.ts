export interface SectorServiceItem {
  id: string;
  sectorId: string;
  title: string;
  description: string;
  content: string;
  iconUrl?: string;
  imageUrl?: string;
  isActive: boolean;
  order?: number;
  category?: string;
  createdAt: string;
  updatedAt: string;
}
