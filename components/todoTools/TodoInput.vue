<template>
  <div class="todoInput">
    <input
      class="todoInput__form"
      type="text"
      placeholder="taskName"
      v-model="todoName"
    />
    <TodoInputButton @addTodo="addTodo" />
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/plugins/firebase";

export default {
  data() {
    return {
      todoName: ""
    };
  },
  methods: {
    async addTodo() {
      if (this.todoName) {
        try {
          const docRef = await addDoc(collection(db, "todos"), {
            todo: this.todoName
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.todoInput {
  display: flex;
  &__form {
    border: solid 1px;
    width: 180px;
    height: 20px;
  }
}
</style>
