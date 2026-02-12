import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text>Welcome to the User Input App!</Text>

        <Button title="Login" onPress={() => router.push("/(auth)/login")} />

        <View style={{ height: 10 }} />

        <Button title="Home" onPress={() => router.push("/(drawer)/home")} />
      </View>
    </SafeAreaView>
  );
}
