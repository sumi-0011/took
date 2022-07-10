import {atom} from 'recoil';
import {TrashCanInfoType} from 'types/TrashCanType';

export const TCRegistSelect = atom<TrashCanInfoType>({
  key: 'TCRegist',
  default: {
    name: 'test name',
    tags: [],
    coordinate: {latitude: 0, longitude: 0},
    image:
      'https://spi.maps.daum.net/map2/map/imageservice?IW=600&IH=350&MX=400205&MY=-11702&SCALE=2.5&service=open',
    trashImage:
      'https://mediahub.seoul.go.kr/uploads/mediahub/2021/09/tpuykXsdsBZQXeTWToBZZEYuYyQSMNof.jpeg',
  },
});
