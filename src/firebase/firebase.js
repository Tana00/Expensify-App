import * as firebase from "firebase/app";
import "firebase/database";
// import expenses from "../selectors/expenses";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATATBASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log("Deleted data:", snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log("Changed data:", snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log("Added data:", snapshot.key, snapshot.val());
// });
// // database.ref("expenses").on("value", (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val(),
// //     });
// //   });
// //   console.log(expenses);
// // });

// database.ref("expenses").push({
//   description: "Food",
//   amount: 109500,
//   createdAt: "Dec 31, 2029",
//   note: "Money spent on food for the month December",
// });

// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     let data = snapshot.val();

//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref("name").set("Happiness");
// }, 3500);

// setTimeout(() => {
//   database.ref().off("value", onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref("/")
//   .set({
//     name: "Happiness Balogun",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google",
//     },
//     location: {
//       city: "Lagos",
//       country: "Nigeria",
//     },
//   })

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(function () {
//     console.log("Remove succeeded.");
//   })
//   .catch(function (error) {
//     console.log("Remove failed: " + error.message);
//   });
