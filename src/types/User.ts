export interface IUser {
  displayName: string;
  uid: string;
  photoURL: string;
  email: string;
}

export interface IUserInfo extends IUser {
  tookCnt: number;
  lastTookTime: Date;
  stars: string[];
  registTrashBoxs: string[];
}
