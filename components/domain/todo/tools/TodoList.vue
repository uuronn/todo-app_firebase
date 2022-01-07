<template>
  <div>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        <TodoItem :todo="todo" @deleteTodo="deleteTodo" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/plugins/firebase";

export default {
  props: ["todos"],
  methods: {
    async deleteTodo(id: string) {
      try {
        console.log(id);
        await deleteDoc(doc(db, "todos", id));
        location.reload();
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>
