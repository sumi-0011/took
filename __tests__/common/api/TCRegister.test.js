const trashList = [
  {
    name: '대전역 건너 버스정류장',
    address: '대전광역시 동구 중앙로 211(장동)',
    image:
      'https://spi.maps.daum.net/map2/map/imageservice?IW=600&IH=350&MX=400205&MY=-11702&SCALE=2.5&service=open',
    trashImage:
      'https://mediahub.seoul.go.kr/uploads/mediahub/2021/09/tpuykXsdsBZQXeTWToBZZEYuYyQSMNof.jpeg',

    tagList: ['플라스틱', '유리병'],
  },
];
const checkTrashBoxAddress = jest.fn();
checkTrashBoxAddress.mockImplementation(address => {
  for (let x of trashList) {
    if (x.address === address) {
      return false;
    }
  }
  return true;
});

describe('쓰레기통 입력 정보 ', () => {
  test('쓰레기통 리스트에 존재하지 않는 쓰레기통 이름, 입력 가능', async () => {
    const res = await checkTrashBoxAddress('새로운 쓰레기통');
    expect(res).toEqual(true);
  });

  test('쓰레기통 리스트에 존재하는 쓰레기통 이름, 입력 불가능', async () => {
    const res = await checkTrashBoxAddress('대전광역시 동구 중앙로 211(장동)');
    expect(res).toEqual(false);
  });
});
