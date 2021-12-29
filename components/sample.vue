<template>
  <div class="todoInput">
    <input
      class="todoInput__form"
      type="text"
      placeholder="taskName"
      :v-model="todoName"
    />
    <!-- <TodoInputButton @addTodo="addTodo"/> -->
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      todoName: ""
    };
  },
  methods: {
    // async addTodo() {
    //   try {
    //     console.log("test")
    //   } catch {
    //   console.log("Error adding document: ");
    //   }
    // }
  }
};
</script>

<style scoped lang="scss">
.todoInput {
  display: flex;
  &__form {
    border: solid 1px;
  }
}
</style>
