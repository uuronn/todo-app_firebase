<template>
  <div class="todoItem">
    {{ todo.title }}
    <TodoItemButton :todo="todo" @deleteTodo="deleteTodo" />
  </div>
</template>

<script lang="ts">
export default {
  props: ["todo"],
  methods: {
    deleteTodo(id: number) {
      this.$emit("deleteTodo", id);
    }
  }
};
</script>

<style scoped lang="scss">
.todoItem {
  display: flex;
}
</style>
