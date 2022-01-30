<template>
  <div class="todoInput">
    <input
      class="todoInput__form"
      type="text"
      placeholder="taskName"
      v-model="todoName"
    />
    <TodoAddBtn @addTodo="addTodo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/plugins/firebase";

export default Vue.extend({
  data() {
    return {
      todoName: ""
    };
  },
  methods: {
    async addTodo() {
      if (this.todoName) {
        try {
          this.$nuxt.$loading.start();
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
});
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
