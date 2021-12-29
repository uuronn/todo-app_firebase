<template>
  <main>
    <button @click="loginhundler">ログイン</button>
    <TodoInput />
    <TodoList :todos="todos" />
    <p>ユーザー名：{{ userId }}</p>
    <!-- <button @click="submit">testbutton</button> -->
    <!-- <h1>{{ this.todos }}</h1> -->
    <button @click="logout">logout</button>
  </main>
</template>

<script>
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  Timestamp
} from "firebase/firestore";
import { auth, db } from "@/plugins/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  signInWithRedirect,
  inMemoryPersistence
} from "firebase/auth";

export default {
  data() {
    return {
      todos: [],
      userId: ""
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        this.userId = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },
  async asyncData() {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const todos = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      todos.push({ todo: doc.data().todo, id: doc.id });
      // TODO {todo: string, id: string}
    });
    console.log(todos);
    return { todos: todos };
    // this.todos = todos
  },
  methods: {
    async logout() {
      await auth.signOut();
      location.reload();
    },
    loginhundler() {
      const provider = new GoogleAuthProvider();

      //     setPersistence(auth, inMemoryPersistence)
      // .then(() => {
      //   const provider = new GoogleAuthProvider();
      //   // In memory persistence will be applied to the signed in Google user
      //   // even though the persistence was set to 'none' and a page redirect
      //   // occurred.
      //   return signInWithRedirect(auth, provider);
      // })
      // .catch((error) => {
      //   // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // });

      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return signInWithEmailAndPassword(auth, email, password);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });

      /*ユーザーがログインしているかどうかを取得 */
      //   const user = auth.currentUser;
      // if (user) {
      //   // User is signed in, see docs for a list of available properties
      //   // https://firebase.google.com/docs/reference/js/firebase.User
      //   // ...
      // } else {
      //   // No user is signed in.
      // }
      // ---------------------------------------------------ここまで

      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          // The signed-in user info.
          // this.userId = user.uid

          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
    //     async submit() {
    //       const docData = {
    //     stringExample: "Hello world!",
    //     booleanExample: true,
    //     numberExample: 3.14159265,
    //     dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    //     arrayExample: [5, true, "hello"],
    //     nullExample: null,
    //     objectExample: {
    //         a: 5,
    //         b: {
    //           nested: "foo"
    //         }
    //     }
    // };
    // await setDoc(doc(db, "data", "one"), docData);
    //       // Add a new document in collection "cities"
    // // await setDoc(doc(db, "citi", "LA"), {
    // //   name: "Los Angeles",
    // //   state: "CA",
    // //   country: "USA"
    // // });
    //       // try {
    //       //   const docRef = await addDoc(collection(db, "aho"), {
    //       //     first: "Alan",
    //       //     middle: "Mathison",
    //       //     last: "Turing",
    //       //     born: 1912
    //       //     // first: "Ada",
    //       //     // last: "Lovelace",
    //       //     // born: 1815
    //       // });
    //       //   console.log("Document written with ID: ", docRef.id);
    //       // } catch (e) {
    //       //     console.error("Error adding document: ", e);
    //       //   }
    //     }
    // async submit() {
    //   const docRef = await addDoc(collection(db, "users"), {
    //       first: "Alan",
    //       middle: "Mathison",
    //       last: "Turing",
    //       born: 1912
    // //       // first: "Ada",
    // //       // last: "Lovelace",
    // //       // born: 1815
    //   })
    //   const querySnapshot = await getDocs(collection(db, "users"));
    //   querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
    //   console.log("Document written with ID: ", docRef.id);
    // }
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
