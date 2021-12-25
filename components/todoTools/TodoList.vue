<template>
  <div>
    <ul>
      <TodoItem :todos="todos" />
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      todos: [
        {
          title: "タスク１"
        },
        {
          title: "タスク２"
        },
        {
          title: "タスク３"
        }
      ]
    };
  }
};
</script>
