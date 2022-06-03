export interface ITCRegisterInfo {
  name: string;
  address?: string;
  tags: Array<string>;
  coordinate: {latitude: number; longitude: number};
  image: string;
  trashImage: string;
}

export interface ITrashBox extends ITCRegisterInfo {
  reportUsers: Array<number>; //신고한 유저 uid
  isFull: boolean; //가득 차 있는지 여부
}
