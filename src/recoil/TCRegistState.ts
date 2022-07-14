import {atom} from 'recoil';
import {TrashCanInfoType} from 'types/TrashCanType';

// TODO: atom initial state 정의 확실하게 하기. image, trashImage 는 기본값이 빈 string 이 좋지 않을지? => yes~

export const TCRegistSelectState = atom<TrashCanInfoType>({
  key: 'TCRegist',
  default: {
    name: '',
    tags: [],
    coordinate: {latitude: 0, longitude: 0},
    trashImage: '',
  },
});
