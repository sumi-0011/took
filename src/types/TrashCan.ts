export interface ITrashCanInfo {
  id: string;
  name: string;
  address?: string;
  tags: string[];
  coordinate: {latitude: number; longitude: number};
  trashImage: string;
}

export interface ITrashCan extends ITrashCanInfo {
  reportUsers: string[];
  isFull: boolean;
}
