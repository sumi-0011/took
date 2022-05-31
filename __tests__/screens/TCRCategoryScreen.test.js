import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import TCRCategoryScreen from '@screens/TCRegister/TCRCategoryScreen';
import {Button, NativeBaseProvider, Input} from 'native-base';
import {
  toBeDisabled,
  toBeEnabled,
  toHaveProp,
} from '@testing-library/jest-native';
expect.extend({toBeDisabled, toBeEnabled, toHaveProp});

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};
function getComponent(props) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <TCRCategoryScreen {...props} />
    </NativeBaseProvider>
  );
}
describe('쓰레기통 등록 Form 렌더링 ...', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  const component = getComponent(props);

  test('쓰레기통 이름 입력 칸이 존재', () => {
    const {getByPlaceholderText} = render(component);
    const input = getByPlaceholderText('쓰레기통 이름을 입력해주세요');
    expect(input).toBeTruthy();
  });
  //체크박스 존재 여부 테스트가 필요할까?

  test('사진 촬영 버튼이 존재', () => {
    const {getByText} = render(component);
    const button = getByText('사진 촬영');
    expect(button).toBeTruthy();
  });
});
describe('쓰레기통 등록 가능 여부 ...', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  const component = getComponent(props);
  const checkTrashBoxAddress = jest.fn();

  test('쓰레기통 이름, 위치 설정 후, 버튼 활성화', () => {
    checkTrashBoxAddress.mockResolvedValue(false);
    const {getByLabelText, getByText, getByPlaceholderText} = render(component);
    const tcName = getByPlaceholderText('쓰레기통 이름을 입력해주세요');
    const tcPlaceText = getByLabelText('쓰레기통 위치');
    const button = getByText('사진 촬영');

    expect(button).toBeDisabled();
    // expect(button).toHaveProp('disabled');

    fireEvent.changeText(tcName, ' 궁동');
    fireEvent.changeText(tcPlaceText, ' 211(장동)');

    fireEvent.press(button);
    expect(button).toBeEnabled();

    // expect(button).toBeTruthy();
  });
});
