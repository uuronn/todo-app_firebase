<template>
  <main class="main">
    <AuthUserId />
    <AuthLogin />
    <AuthLogout />
    <div class="main__container">
      <TodoInput />
      <TodoList :todos="todos" />
    </div>
  </main>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
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
      todos.push({ title: doc.data().title, id: doc.id });
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

  &__container {
    position: absolute;
    left: 30px;
    top: 30px;
  }
}
</style>
