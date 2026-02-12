import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  // Redirect to login page on app start
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 0);

    return () => clearTimeout(timer);
  }, [router]);

  return null; // Return null since we're redirecting immediately
}
