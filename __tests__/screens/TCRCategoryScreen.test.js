import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import TCRCategoryScreen from '@screens/TCRegister/TCRCategoryScreen';
import {Button, NativeBaseProvider, Text} from 'native-base';
import {toBeDisabled, toBeEnabled} from '@testing-library/jest-native';
expect.extend({toBeDisabled, toBeEnabled});

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

  // test('사진 촬영 버튼이 존재', () => {
  //   const {getByTestId} = render(
  //     <NativeBaseProvider initialWindowMetrics={inset}>
  //       <View>
  //         <Button disabled testID="button" title="submit" onPress={e => e} />
  //       </View>
  //     </NativeBaseProvider>,
  //   );

  //   expect(getByTestId('button')).toBeDisabled();
  // });

  test('쓰레기통 위치가 중복되었을 때', () => {
    checkTrashBoxAddress.mockResolvedValue(false);

    // const {getByLabelText, getByText} = render(component);
    const {getByLabelText, getByText, getByTestId} = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <Text accessibilityLabel="쓰레기통 위치" testID="placeTest">
          쓰레기통 위치
        </Text>
        <Button disabled testID="button" title="submit" onPress={e => e}>
          사진 촬영
        </Button>
      </NativeBaseProvider>,
    );
    const tcPlaceText = getByLabelText('쓰레기통 위치');
    const button = getByText('사진 촬영');
    // const text = getByTestId('placeTest');

    expect(button).toBeEnabled();

    fireEvent.changeText(tcPlaceText, '대전광역시 동구 중앙로 211(장동)');
    // fireEvent.press(button);

    // expect(button).toBeDisabled();
    expect(button).toBeTruthy();
  });
});
