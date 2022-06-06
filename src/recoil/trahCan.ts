import {atom} from 'recoil';
import {ITrashCanInfo, ITrashCan} from 'types/TrashCan';

export const TrashCan = atom<ITrashCan>({
  key: 'TCRegist',
  default: {
    id: 'hPjgGHwx666n0x3q9Yfk',
    name: '',
    tags: [],
    coordinate: {latitude: 0, longitude: 0},
    trashImage:
      'https://mediahub.seoul.go.kr/uploads/mediahub/2021/09/tpuykXsdsBZQXeTWToBZZEYuYyQSMNof.jpeg',
    reportUsers: [],
    isFull: false,
  },
});
