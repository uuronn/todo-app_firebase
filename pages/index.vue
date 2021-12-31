<template>
  <main>
    <AuthLogin />
    <TodoInput />
    <TodoList :todos="todos" />
    <p>ユーザー名:{{ userId }}</p>
    <AuthLogout />
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
      todos.push({ title: doc.data().todo, id: doc.id });
      // TODO {todo: string, id: string}
    });
    console.log(todos);
    return { todos: todos };
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
