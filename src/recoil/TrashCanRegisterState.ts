import {atom} from 'recoil';
import {TrashCanInfoType} from 'types/TrashCanType';

export const trashCanRegisterState = atom<TrashCanInfoType>({
  key: 'trashCanRegisterState',
  default: {
    id: '',
    name: '',
    tags: [],
    coordinate: {latitude: 0, longitude: 0},
    trashImage: '',
  },
});
