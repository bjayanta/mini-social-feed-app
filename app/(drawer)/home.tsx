import { Post, posts } from "@/data/feeds";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: Post }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/(drawer)/feed/[id]",
          params: { id: item.id },
        })
      }
    >
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.meta}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.time}>{item.createdAt}</Text>
      </View>
      <Text style={styles.content}>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  time: {
    fontSize: 14,
    color: "gray",
  },
});
