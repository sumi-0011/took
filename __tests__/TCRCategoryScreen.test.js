import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import TCRCategoryScreen from '@screens/TCRegister/TCRCategoryScreen';
import {NativeBaseProvider} from 'native-base';
function getComponent(props) {
  return (
    <NativeBaseProvider>
      <TCRCategoryScreen {...props} />
    </NativeBaseProvider>
  );
}
describe('쓰레기통 등록 Form 렌더링 ...', () => {
  const props = {};
  const component = getComponent(props);

  test('쓰레기통 이름 입력 칸이 존재', () => {
    const {getByPlaceholderText} = render(component);
    const input = getByPlaceholderText('쓰레기통 이름을 입력해주세요');
    expect(input).toBeTruthy();
  });
});
