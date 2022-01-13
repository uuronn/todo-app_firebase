<template>
  <div>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        <TodoItem :todo="todo" @deleteTodo="deleteTodo" @doneTodo="doneTodo" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/plugins/firebase";
import Vue from "vue";
import axios from "@nuxtjs/axios";

export default Vue.extend({
  props: ["todos"],
  methods: {
    async doneTodo(id: string) {
      try {
        alert("test");
        console.log(id);
        // await deleteDoc(doc(db, "todos", id));
        const response = await this.$axios.$get(
          "https://thatcopy.pw/catapi/rest/"
        );
        const test = response;
        alert(test);
        location.reload();
      } catch (e) {
        console.error(e);
      }
    },
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
});
</script>
