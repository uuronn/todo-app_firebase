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

<script lang="ts">
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
      console.log("emit繋ぎ成功");
      if (this.todoName) {
        try {
          const docRef = await addDoc(collection(db, "todos"), {
            title: this.todoName
          });
          console.log("Document written with ID: ", docRef.id);
          location.reload();
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
