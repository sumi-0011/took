import {atom} from 'recoil';
import {IUserInfo} from 'types/User';

export const user = atom<IUserInfo>({
  key: 'userInfo',
  default: {
    id: '', //dosId
    uid: 0, //pk
    tookCnt: 0, //버린 횟수 => 사용자 활동 시각화
    lastTookTime: '', // or Date 마지막으로 쓰레기를 버린 시간
    stars: new Array(), //즐겨찾기한 쓰레기통 id리스트
    registTrashBoxs: new Array(), //등록한 쓰레기통 리스트
  },
});
