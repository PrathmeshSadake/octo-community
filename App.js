import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCpAnuyZSkOL0P1nZCIMIr2cj5w5SaDWlw",
//   authDomain: "octochat-0410.firebaseapp.com",
//   projectId: "octochat-0410",
//   storageBucket: "octochat-0410.appspot.com",
//   messagingSenderId: "732759058767",
//   appId: "1:732759058767:web:1048c5545a9c43167f7d3a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
