import {atom} from 'recoil';
import {string} from 'yup';

export const filterSelect = atom({
  key: 'filterSelect',
  default: {
    categories: '',
    subcategories: new Set(),
    seasons: new Set(),
    'serial-number': '',
    limit: 200,
    tcr: {
      name: '공대 5호관 쓰레기통',
      checkList: new Array(),
    },
  },
});

export const TCRegistSelect = atom({
  key: 'TCRegist',
  default: {
    name: 'test name',
    tags: new Array(),
    coordinate: [0, 0],
    image:
      'https://spi.maps.daum.net/map2/map/imageservice?IW=600&IH=350&MX=400205&MY=-11702&SCALE=2.5&service=open',
    trashImage:
      'https://mediahub.seoul.go.kr/uploads/mediahub/2021/09/tpuykXsdsBZQXeTWToBZZEYuYyQSMNof.jpeg',
  },
});
