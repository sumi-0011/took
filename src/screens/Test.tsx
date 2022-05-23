import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>아래에 컴포넌트가 들어갑니다.</Text>
      <User name={'악당별'} id={'a9603'} />
    </View>
  );
};
const User = ({name, id}) => {
  const [msg, setMsg] = useState('Who a u?');

  return (
    <View>
      <Text>메시지가 표시 됩니다. : {msg}</Text>
      <Text>아이디가 표시 됩니다 : {id}</Text>
      <Text>이름이 표시 됩니다 : {name}</Text>
      <CustomButton
        label="버튼입니다."
        onPress={() => setMsg('버튼을 눌렀습니다.')}
      />
    </View>
  );
};

const CustomButton = ({label, onPress}) => {
  return <Button title={label} onPress={onPress} />;
};

export default App;
