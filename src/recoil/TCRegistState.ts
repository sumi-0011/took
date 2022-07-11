import {atom} from 'recoil';
import {TrashCanInfoType} from 'types/TrashCanType';

// TODO: atom initial state 정의 확실하게 하기. image, trashImage 는 기본값이 빈 string 이 좋지 않을지?

export const TCRegistSelectState = atom<TrashCanInfoType>({
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
