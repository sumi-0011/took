export interface TrashCanInfoType {
  id: string;
  name: string;
  address?: string;
  tags: string[];
  coordinate: {latitude: number; longitude: number};
  trashImage: string;
}

export interface TrashCanType extends TrashCanInfoType {
  reportUsers: string[]; //신고 유저
  isFull: boolean; //쓰레기통이 꽉 찼는지 여부
  count_yes: number;
  count_no: number;
}

export interface TCRStep1RegistType {
  name: string;
  tags: string[];
  coordinate: {latitude: number; longitude: number};
}

export interface RecycleTypes {
  name: string;
  key: string;
  check: boolean;
}

export interface RecycleItem {
  item: RecycleTypes;
}
