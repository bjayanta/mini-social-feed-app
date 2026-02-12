import { addPost } from "@/data/feeds";
import { useHeaderHeight } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const CreateFeed = () => {
  const router = useRouter();
  const headerHeight = useHeaderHeight();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const MAX_TITLE_LENGTH = 50;
  const MAX_CONTENT_LENGTH = 200;

  const handlePost = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert("Title and Content cannot be empty");
      return;
    }

    // Add post to data.ts
    addPost({
      title,
      username: "You", // Or get from user auth
      content,
    });

    setTitle("");
    setContent("");

    // Go back to feed list
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={headerHeight}
    >
      <View style={styles.inner}>
        {/* Title Input */}
        <TextInput
          style={styles.titleInput}
          placeholder="Post Title"
          maxLength={MAX_TITLE_LENGTH}
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.counter}>
          {title.length}/{MAX_TITLE_LENGTH}
        </Text>

        {/* Content Input */}
        <TextInput
          style={styles.contentInput}
          placeholder="What's on your mind?"
          multiline
          maxLength={MAX_CONTENT_LENGTH}
          value={content}
          onChangeText={setContent}
        />
        <Text style={styles.counter}>
          {content.length}/{MAX_CONTENT_LENGTH}
        </Text>

        {/* Post Button */}
        <Pressable
          style={[
            styles.button,
            (!title.trim() || !content.trim()) && { opacity: 0.5 },
          ]}
          onPress={handlePost}
          disabled={!title.trim() || !content.trim()}
        >
          <Text style={styles.buttonText}>Post</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    padding: 20,
  },
  titleInput: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 8,
    marginBottom: 5,
  },
  contentInput: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  counter: {
    textAlign: "right",
    color: "gray",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
