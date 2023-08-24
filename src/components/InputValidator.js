import { TextInput, View, Text } from "react-native";

const InputValidator = (props) => {
  return (
    <View>
      <Text>
        {props.text}
      </Text>
      <TextInput value={props.value} onChangeText={props.onChange} onSubmitEditing={props.onSubmit} keyboardType={props.keyboardType} placeholder={props.placeholder} secureTextEntry={props.isPassword ?? false} />
    </View>
  );
}


export default InputValidator;