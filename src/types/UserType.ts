export interface UserType {
  displayName: string;
  uid: string;
  photoURL: string;
  email: string;
}

export interface UserInfoType extends UserType {
  tookCnt: number;
  lastTookTime: Date;
  stars: string[];
  registTrashBoxs: string[];
}
