import {atom} from 'recoil';
import {ITrashCanInfo, ITrashCan} from 'types/TrashCanType';

export const TrashCan = atom<ITrashCan>({
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
