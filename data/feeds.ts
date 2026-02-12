export interface Comment {
  id: string;
  username: string;
  text: string;
}

export interface Post {
  id: string;
  username: string;
  title: string;
  content: string;
  createdAt: string;
  comments?: Comment[];
}

export const posts: Post[] = [
  {
    id: "1",
    username: "jayanta",
    title: "My First Post",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corruptiquos vitae, veritatis officiis aspernatur, similique sed dolorem pariatur commodi quaerat quae exercitationem labore rerum voluptatum. Quidem maiores suscipit unde totam!",
    createdAt: "2h ago",
    comments: [
      {
        id: "c1",
        username: "Rahim",
        text: "Nice post!",
      },
      {
        id: "c2",
        username: "Karim",
        text: "Welcome bro 🔥",
      },
    ],
  },
  {
    id: "2",
    username: "rahim",
    title: "Learning Expo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quos vitae, veritatis officiis aspernatur, similique sed dolorem pariatur commodi quaerat quae exercitationem labore rerum voluptatum. Quidem maiores suscipit unde totam!",
    createdAt: "4h ago",
    comments: [
      {
        id: "c3",
        username: "Jayanta",
        text: "Expo is great for React Native development!",
      },
    ],
  },
  {
    id: "3",
    username: "karim",
    title: "Mini Social Feed App",
    content: "Just building a mini social feed app.",
    createdAt: "1d ago",
    comments: [
      {
        id: "c4",
        username: "Jayanta",
        text: "Looking good bro!",
      },
      {
        id: "c5",
        username: "Rahim",
        text: "Can't wait to see the final product!",
      },
    ],
  },
  {
    id: "4",
    username: "user1",
    title: "Mini Social Feed App",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quos vitae, veritatis officiis aspernatur, similique sed dolorem pariatur commodi quaerat quae exercitationem labore rerum voluptatum. Quidem maiores suscipit unde totam!",
    createdAt: "1d ago",
    comments: [
      {
        id: "c6",
        username: "Jayanta",
        text: "Great content!",
      },
    ],
  },
  {
    id: "5",
    username: "user2",
    title: "This is another post",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quos vitae, veritatis officiis aspernatur, similique sed dolorem pariatur commodi quaerat quae exercitationem labore rerum voluptatum. Quidem maiores suscipit unde totam!",
    createdAt: "1d ago",
    comments: [
      {
        id: "c6",
        username: "Jayanta",
        text: "Great content!",
      },
    ],
  },
  {
    id: "6",
    username: "user3",
    title: "This is a test post",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quos vitae, veritatis officiis aspernatur, similique sed dolorem pariatur commodi quaerat quae exercitationem labore rerum voluptatum. Quidem maiores suscipit unde totam!",
    createdAt: "1d ago",
    comments: [
      {
        id: "c6",
        username: "Jayanta",
        text: "Great content!",
      },
    ],
  },
];

// Function to add a new post to the feed
export function addPost(newPost: Omit<Post, "id" | "createdAt">) {
  const post: Post = {
    ...newPost,
    id: Date.now().toString(),
    createdAt: "Just now",
    comments: [],
  };

  posts.unshift(post);

  return post;
}
