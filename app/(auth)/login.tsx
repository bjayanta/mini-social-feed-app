import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const router = useRouter();

  const handleSignIn = () => {
    // TODO: real API login later

    // Replace so user cannot go back to login
    router.replace("/(drawer)/home");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", paddingHorizontal: 24 }}
    >
      {/* Company Logo */}
      <Image
        source={images.logo}
        style={{ width: 128, height: 128 }}
        resizeMode="contain"
      />

      {/* Company details */}
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Company Name</Text>
        <Text style={{ fontSize: 16, color: "gray" }}>Company Tagline</Text>
      </View>

      {/* Separator */}
      <View style={{ height: 20 }}></View>

      {/*
       * Inputs and buttons would go here,
       * but for now we just have a placeholder text.
       */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Sign In</Text>

        <View style={{ height: 6 }}></View>

        <View style={{ marginBottom: 8 }}>
          <Text
            style={{ fontSize: 16, fontWeight: "normal", paddingVertical: 6 }}
          >
            Email address
          </Text>
          <TextInput
            keyboardType="email-address"
            style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
          />
        </View>

        <View style={{ marginBottom: 8 }}>
          <Text
            style={{ fontSize: 16, fontWeight: "normal", paddingVertical: 6 }}
          >
            Password
          </Text>
          <TextInput
            secureTextEntry={true}
            style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
            returnKeyType="done"
          />
        </View>

        <View>
          <Text
            style={{ fontSize: 16, color: "blue" }}
            onPress={() => alert("Forgot password.")}
          >
            Forgot password?
          </Text>
        </View>

        <View>
          <Pressable
            onPress={handleSignIn}
            style={({ pressed }) => [
              {
                alignItems: "center",
                backgroundColor: pressed ? "#004080" : "#007BFF",
                marginTop: 20,
                padding: 12,
              },
            ]}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Sign In</Text>
          </Pressable>
        </View>

        <View
          style={{
            marginTop: 12,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <Text style={{ fontSize: 16 }}>I don&lsquo;t have an account,</Text>

          <Text
            onPress={() => router.push("/(auth)/register")}
            style={{ fontSize: 16, color: "blue" }}
          >
            Sign up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
