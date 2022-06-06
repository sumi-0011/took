import {atom} from 'recoil';
import {IUserInfo} from 'types/User';
import {string} from 'yup';

export const user = atom<IUserInfo>({
  key: 'userInfo',
  default: {
    // id: '', //dosId
    displayName: '',
    uid: '', //pk
    email: '',
    photoURL: '',
    tookCnt: 0, //버린 횟수 => 사용자 활동 시각화
    lastTookTime: new Date(), // or Date 마지막으로 쓰레기를 버린 시간
    stars: [], //즐겨찾기한 쓰레기통 id리스트
    registTrashBoxs: [], //등록한 쓰레기통 리스트
  },
});
