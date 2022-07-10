import {atom} from 'recoil';
import {TrashCanType} from 'types/TrashCanType';

export const TrashCan = atom<TrashCanType>({
  key: 'TCRegist',
  default: {
    id: '',
    name: '',
    tags: [],
    coordinate: {latitude: 0, longitude: 0},
    trashImage: '',
    reportUsers: [],
    isFull: false,
  },
});
