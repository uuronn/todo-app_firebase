<template>
  <div>
    <ul class="list">
      <li class="item" v-for="(todo, i) in todos" :key="i">
        <TodoItem :todo="todo" @doneTodo="doneTodo" @deleteTodo="deleteTodo" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/plugins/firebase";

export default defineComponent({
  props: {
    todos: {
      type: Array
    }
  },
  setup() {
    const doneTodo = async (id: string) => {
      try {
        // this.$nuxt.$loading.start();
        await deleteDoc(doc(db, "todos", id));
        console.log("完了");
        console.log(id);
        location.reload();
      } catch (error) {
        console.error(error);
      }
    };
    const deleteTodo = async (id: string) => {
      const result = confirm("削除しますか？");
      console.log(result);
      if (result) {
        try {
          // this.$nuxt.$loading.start();
          await deleteDoc(doc(db, "todos", id));
          console.log("削除");
          console.log(id);
          location.reload();
        } catch (error) {
          console.error(error);
        }
      }
    };
    return {
      deleteTodo,
      doneTodo
    };
  }
});
</script>

<style scoped lang="scss">
.item {
  // display: flex;
  &::marker {
  }
}
</style>
