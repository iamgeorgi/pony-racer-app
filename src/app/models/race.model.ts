export interface RaceModel {
  id: number;
  name: string;
  ponies: Array<PonyModel>;
  startInstant: string;
}

interface PonyModel {
  id: number;
  name: string;
  color: string;
}
