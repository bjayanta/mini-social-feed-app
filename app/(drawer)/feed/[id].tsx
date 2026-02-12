import { posts } from "@/data/feeds";
import { useHeaderHeight } from "@react-navigation/elements";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const FeedDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const headerHeight = useHeaderHeight();

  const post = posts.find((p) => p.id === id);

  const [comments, setComments] = useState(post?.comments || []);
  const [newComment, setNewComment] = useState("");

  if (!post) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Post not found</Text>
      </View>
    );
  }

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      username: "You",
      text: newComment,
    };

    setComments((prev) => [comment, ...prev]);
    setNewComment("");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={headerHeight}
    >
      <View style={{ flex: 1 }}>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 20, paddingBottom: 120 }}
          ListHeaderComponent={
            <View style={styles.postContainer}>
              <Text style={styles.title}>{post.title}</Text>

              <View style={styles.meta}>
                <Text style={styles.username}>{post.username}</Text>
                <Text style={styles.time}>{post.createdAt}</Text>
              </View>

              <Text style={styles.content}>{post.content}</Text>

              <Text style={styles.commentTitle}>Comments</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.commentCard}>
              <Text style={styles.commentUser}>{item.username}</Text>
              <Text>{item.text}</Text>
            </View>
          )}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write a comment..."
            value={newComment}
            onChangeText={setNewComment}
          />
          <Pressable style={styles.button} onPress={handleAddComment}>
            <Text style={styles.buttonText}>Post</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FeedDetails;

const styles = StyleSheet.create({
  errorText: {
    fontSize: 18,
    color: "red",
  },
  postContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  content: {
    fontSize: 16,
    marginBottom: 6,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  commentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  commentCard: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  commentUser: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
