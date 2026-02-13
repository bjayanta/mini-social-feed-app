# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Set System Variables & Path

Java:

If you installed Android Studio, usually it is:

```text
Variable name: JAVA_HOME
Variable value: C:\Program Files\Android\Android Studio\jbr
```

Java Path:

```text
%JAVA_HOME%\bin
```

Check version:

```bash
java -version
```

Android SDK:

```text
Variable name: ANDROID_HOME
Variable value: <Your-android-sdk-path>
```

Android Path:

```text
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
```

## Verify

Open a new terminal (Git Bash or PowerShell) and run:

PowerShell:

```bash
echo $env:ANDROID_HOME
```

Git Bash:

```bash
echo $ANDROID_HOME
```

Android Debug Bridge:

```bash
adb --version
```

## Generate Native Android Folder

```bash
npx expo prebuild
```

This will:

- Create an android/ folder
- Convert your project to a "bare-like" workflow

## Build

Enter the android directory:

```bash
cd android
```

For debug APK (Windows):

```bash
./gradlew.bat assembleDebug
```

For Release APK (Windows):

```bash
./gradlew.bat assembleRelease
```

If anything wrong and need to build again

```bash
cd android
./gradlew.bat clean
./gradlew.bat assembleDebug
```
