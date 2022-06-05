export interface IUser {
  displayName: string;
  uid: string;
  photoURL: string;
}

export interface IUserInfo extends IUser {
  tookCnt: number;
  lastTookTime: Date;
  stars: number[];
  registTrashBoxs: number[];
}
