export interface IUser {
  displayName: string;
  uid: string;
  photoURL: string;
}

export interface IUserInfo extends IUser {
  tookCount: number;
  lastTookTime: Date;
  bookmarks: number[];
  registTrashBoxs: number[];
}
