import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="home"
        options={{ drawerLabel: "Home", title: "Feeds" }}
      />
      <Drawer.Screen
        name="create"
        options={{ drawerLabel: "Create Feed", title: "Create Feed" }}
      />
      <Drawer.Screen
        name="profile"
        options={{ drawerLabel: "Profile", title: "Profile" }}
      />
      <Drawer.Screen
        name="settings"
        options={{ drawerLabel: "Settings", title: "Settings" }}
      />
      <Drawer.Screen
        name="feed/[id]"
        options={{
          drawerItemStyle: { display: "none" },
          title: "Feed Details",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
