import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import TCRInfoScreen, {PlaceInfo} from '@screens/TCRegister/TCRInfoScreen';
import {NativeBaseProvider} from 'native-base';
const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

// function getComponent(props) {
//   return (
//     <NativeBaseProvider initialWindowMetrics={inset}>
//       <TCRInfoScreen {...props} />
//     </NativeBaseProvider>
//   );
// }

const dummyInfo = {
  name: '대전역 건너 버스정류장',
  address: '대전광역시 동구 중앙로 211(장동)',
  image:
    'https://spi.maps.daum.net/map2/map/imageservice?IW=600&IH=350&MX=400205&MY=-11702&SCALE=2.5&service=open',
  trashImage:
    'https://mediahub.seoul.go.kr/uploads/mediahub/2021/09/tpuykXsdsBZQXeTWToBZZEYuYyQSMNof.jpeg',

  tagList: ['플라스틱', '유리병'],
};
function getComponent(props) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <PlaceInfo
        name={dummyInfo.name}
        address={dummyInfo.address}
        image={dummyInfo.image}
      />
    </NativeBaseProvider>
  );
}
describe('쓰레기통 info 렌더링 ...', () => {
  const props = {};
  const component = getComponent(props);
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
