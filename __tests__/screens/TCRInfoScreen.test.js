import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import TCRInfoScreen, {
  PlaceInfo,
  TrashBoxInfo,
} from '@screens/TCRegister/TCRInfoScreen';
import {NativeBaseProvider} from 'native-base';
const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

//   );
const dummyInfo = {
  name: '대전역 건너 버스정류장',
  address: '대전광역시 동구 중앙로 211(장동)',
  image:
    'https://spi.maps.daum.net/map2/map/imageservice?IW=600&IH=350&MX=400205&MY=-11702&SCALE=2.5&service=open',
  trashImage:
    'https://mediahub.seoul.go.kr/uploads/mediahub/2021/09/tpuykXsdsBZQXeTWToBZZEYuYyQSMNof.jpeg',

  tagList: ['플라스틱', '유리병'],
};

describe('쓰레기통 위치 정보 렌더링 ...', () => {
  const props = {
    name: dummyInfo.name,
    address: dummyInfo.address,
    image: dummyInfo.image,
  };
  const component = (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <PlaceInfo {...props} />
    </NativeBaseProvider>
  );

  test('쓰레기통 info name 존재', () => {
    const {getByLabelText} = render(component);
    const element = getByLabelText('place-name');
    expect(element).toBeTruthy();
  });

  test('쓰레기통 info address 존재', () => {
    const {getByLabelText} = render(component);
    const element = getByLabelText('place-address');
    expect(element).toBeTruthy();
  });

  test('쓰레기통 info img 존재', () => {
    const {getByLabelText} = render(component);
    const element = getByLabelText('쓰레기통 위치');
    expect(element).toBeTruthy();
  });
});

describe('쓰레기통 정보 렌더링 ...', () => {
  const props = {
    image: dummyInfo.image,
    tagList: dummyInfo.tagList,
  };

  const component = (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <TrashBoxInfo {...props} />
    </NativeBaseProvider>
  );

  test('쓰레기통 info name 존재', () => {
    const {getByLabelText} = render(component);
    const element = getByLabelText('쓰레기통 이미지');
    expect(element).toBeTruthy();
  });

  test('쓰레기통 info tag 존재', () => {
    const {getAllByTestId} = render(component);
    const element = getAllByTestId('trash-tag');
    expect(element).toHaveLength(dummyInfo.tagList.length);
  });
});
