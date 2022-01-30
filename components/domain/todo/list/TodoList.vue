<template>
  <div>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        <TodoItem :todo="todo" @doneTodo="doneTodo" @deleteTodo="deleteTodo" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/plugins/firebase";
import Vue from "vue";

export default Vue.extend({
  props: ["todos"],
  methods: {
    async doneTodo(id: string) {
      try {
        this.$nuxt.$loading.start();
        console.log(id);
        await deleteDoc(doc(db, "todos", id));
        // const response = await this.$axios.$get(
        //   "https://thatcopy.pw:443/catapi/rest/"
        // );
        // console.log(response);
        // this.$nuxt.$loading.finish();
        // const test = response.url;
        // return { catImage: response.url };
        // alert(`猫の画像だよ${test}`)
        // alert("testfdfdf")
        location.reload();
      } catch (e) {
        console.error(e);
      }
    },
    async deleteTodo(id: string) {
      console.log("test");
      const result = confirm("削除しますか？");
      console.log(result);
      if (result) {
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
  }
});
</script>
