import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ width: "80%" }}>
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          value="abc@gmail.com"
          style={{
            backgroundColor: "white",
            width: "80%",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 5,
          }}
        ></TextInput>

        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          //value=""
          secureTextEntry={true}
          style={{
            backgroundColor: "white",
            width: "80%",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 5,
          }}
        ></TextInput>
        <Button
          title="Login"
          style={{ width: "100%", backgroundColor: "#0782F9", padding: 15 }}
        >
          Login
        </Button>
        <Button
          title="Register"
          style={{ width: "100%", backgroundColor: "#0782F9", padding: 15 }}
        ></Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
