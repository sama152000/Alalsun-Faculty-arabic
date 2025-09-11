export interface SectorUnit {
  id: string;
  sectorId: string;
  name: string;
  description: string;
  content: string;
  managerName?: string;
  managerEmail?: string;
  managerPhone?: string;
  imageUrl?: string;
  isActive: boolean;
  order?: number;
  createdAt: string;
  updatedAt: string;
}
