export interface TrashCanInfoType {
  id: string;
  name: string;
  address?: string;
  tags: string[];
  coordinate: {latitude: number; longitude: number};
  trashImage: string;
}

export interface TrashCanType extends TrashCanInfoType {
  reportUsers: string[];
  isFull: boolean;
}
