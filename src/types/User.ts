export interface IUserInfo {
  id: string; //dosId
  uid: string; //pk
  tookCnt: number; //버린 횟수 => 사용자 활동 시각화
  lastTookTime: string; // or Date 마지막으로 쓰레기를 버린 시간
  stars: Array<number>; //즐겨찾기한 쓰레기통 id리스트
  // reports: Array<number>; //신고 리스트
  registTrashBoxs: Array<number>; //등록한 쓰레기통 리스트
}
