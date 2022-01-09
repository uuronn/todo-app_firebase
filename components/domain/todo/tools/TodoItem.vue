<template>
  <div class="todoItem">
    {{ todo.title }}
    <TodoItemButton :todo="todo" @deleteTodo="deleteTodo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["todo"],
  methods: {
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
