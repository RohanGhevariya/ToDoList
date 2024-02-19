import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signUpWithEmailAndPassword = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Registered with: ", user.email);
        // Return any data you need
        return user;
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        // Throw an error or return an error object
        throw error;
      });
  };

  const handleSignUp = () => {
    signUpWithEmailAndPassword(email, password)
      .then((user) => {
        // Handle successful signup
        console.log("User signed up:", user);
      })
      .catch((error) => {
        // Handle signup error
        console.error("Signup failed:", error);
      });
  };

  const LogInWithEmailAndPassword = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Logged in with: ", user.email);
        // Return any data you need
        return user;
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        // Throw an error or return an error object
        throw error;
      });
  };

  const handleLogIn = () => {
    LogInWithEmailAndPassword(email, password)
      .then((user) => {
        // Handle successful signup
        console.log("User signed up:", user);
      })
      .catch((error) => {
        // Handle signup error
        console.error("Signup failed:", error);
      });
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ width: "80%" }}>
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            backgroundColor: "white",
            width: "100%",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 5,
          }}
        ></TextInput>

        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          style={{
            backgroundColor: "white",
            width: "100%",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 5,
          }}
        ></TextInput>
        <Button
          title="Login"
          style={{ width: "100%", backgroundColor: "#0782F9", padding: 15 }}
          onPress={handleLogIn} // TODO: Implement login functionality.
        >
          Login
        </Button>
        <Button
          title="Register"
          style={{ width: "100%", backgroundColor: "#0782F9", padding: 15 }}
          onPress={handleSignUp} // Register button should call handleSignUp
        ></Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
