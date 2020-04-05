# **_react-native-boilerplate_**
Blank Boilerplate React Native


## WHY USE EASY STARTER ?

- Always up-to-date React Native 0.62.0

* [Easy-Peasy](https://github.com/ctrlplusb/easy-peasy) makes it easy to access the global state.

- Use of [React Hooks](https://reactjs.org/docs/hooks-intro.html) optimizes the performance and increases reusability.

* Provides a basic infrastructure, which can easily be used throughout the whole project.

- [ApiSauce](https://github.com/infinitered/apisauce) Axios + standardized errors + request/response transforms.

## Currently Includes

- React-native 0.62
- easy-peasy for state management
- Hooks
- react-navigation
- react-native-vector-icons
- Themes support and much more

## Ready to use templates

- Loading
- Api ready service
- material design components using [react-native-paper](https://github.com/callstack/react-native-paper)
- easy-peasy models
- `useStorage()` for async storage
- `useTheme()` for using themes
- ... much more

## Getting Started

**Step 1:** Clone and Install

```sh

$ git clone https://github.com/maateusx/react-native-boilerplate.git

$ cd react-native-boilerplate

$ yarn

```

**Step 2:** Rename the app [react-native-rename](https://github.com/junedomingo/react-native-rename#installation)

```sh

$ yarn global add react-native-rename

$ react-native-rename <newName>

```

[View](https://github.com/junedomingo/react-native-rename#installation) more option

**Step 3:** Start the App

```sh

$ yarn start --reset-cache

$ yarn run android:dev

```

### For release build (ANDROID)

see [Generating signed apk](https://facebook.github.io/react-native/docs/signed-apk-android)

```sh

$ yarn run android:build

```

## Reactotron

Reactotron is a debug developer tool, where you can scan requests, states and reducers from your device.

**Installing Reactotron.app**
Let’s [download the desktop app](https://github.com/infinitered/reactotron/blob/master/docs/installing.md) to start.  You can download for Linux, Windows, and Mac.

**Note**: If using an Android device or emulator run the following command to make sure it can connect to Reactotron:
```
adb reverse tcp:9090 tcp:9090
```

## How can I contribute?

#### Bugs? Comments? Features? PRs and Issues happily welcomed!

- :star: Star our GitHub repo

* :wrench: Create Fixes, suggest new features or update docs

##
