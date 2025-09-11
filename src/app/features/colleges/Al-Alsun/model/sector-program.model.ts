export interface SectorProgram {
  id: string;
  sectorId: string;
  title: string;
  description: string;
  content: string;
  duration?: string;
  level?: string;
  requirements?: string;
  imageUrl?: string;
  isActive: boolean;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}
