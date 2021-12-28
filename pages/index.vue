<template>
  <main>
    <TodoInput />
    <TodoList :todos="todos" />
    <!-- <button @click="submit">testbutton</button> -->
    <!-- <h1>{{ this.todos }}</h1> -->
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
import { db } from "@/plugins/firebase";

export default {
  data() {
    return {
      todos: []
    };
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
