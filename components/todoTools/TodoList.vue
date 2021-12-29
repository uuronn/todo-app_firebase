<template>
  <div>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        <TodoItem :todo="todo" @deleteTodo="deleteTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import { doc, deleteDoc, getDoc, collection } from "firebase/firestore";
import { db } from "@/plugins/firebase";

export default {
  props: ["todos"],
  methods: {
    async deleteTodo(id) {
      try {
        await deleteDoc(doc(db, "todos", id));
        location.reload();
        // setTimeout(function(){
        //   location.reload()
        // }, 1000);
        // const shot = await getDocs(collection(db, "todos"));
        // const response = await this.$axios.$delete(`https://yukinissie.dev/api/todos/${this.todos[i].id}`)
        // console.log(response)
        // location.reload()
        // console.log(i)
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>
