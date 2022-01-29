<template>
  <div class="todoItem">
    {{ todo.title }}
    <TodoDoneButton :todo="todo" @doneTodo="doneTodo" />
    <TodoDeleteButton :todo="todo" @deleteTodo="deleteTodo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["todo"],
  methods: {
    doneTodo(id: string) {
      this.$emit("doneTodo", id);
    },
    deleteTodo(id: string) {
      this.$emit("deleteTodo", id);
    }
  }
});
</script>

<style scoped lang="scss">
.todoItem {
  display: flex;
}
</style>
