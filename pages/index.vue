<template>
  <main class="main">
    <div class="todo">
      <TodoInput />
      <TodoList :todos="todos" />
    </div>
    <UserId />
    <Login />
    <Logout />
  </main>
</template>

<script lang="ts">
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/plugins/firebase";
import Vue from "vue";

interface Todo {
  title: string;
  id: string;
}

export default Vue.extend({
  data() {
    return {
      todos: [],
      test: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  async asyncData() {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const todos: Array<Todo> = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      todos.push({ title: doc.data().title, id: doc.id });
      // TODO {title: string, id: string}
    });
    console.log(todos);
    return { todos: todos };
  }
});
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
.todo {
  position: absolute;
  left: 30px;
  top: 30px;
}
</style>
