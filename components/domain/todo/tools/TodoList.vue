<template>
  <div>
    <img :src="catImage" alt="" />
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

export default Vue.extend({
  data() {
    return {
      catImage: ""
    };
  },
  props: ["todos"],
  methods: {
    async doneTodo(id: string) {
      try {
        // alert("test");
        // console.log(id);

        // await deleteDoc(doc(db, "todos", id));
        const response = await this.$axios.$get(
          "https://thatcopy.pw/catapi/rest/"
        );
        console.log(response.url);
        this.$nuxt.$loading.finish();
        return { catImage: response.url };
        // const test = response.url;
        // alert(`猫の画像だよ${test}`)
        // alert("testfdfdf")
        // location.reload();
      } catch (e) {
        console.error(e);
      }
    },
    async deleteTodo(id: string) {
      try {
        this.$nuxt.$loading.start();
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
