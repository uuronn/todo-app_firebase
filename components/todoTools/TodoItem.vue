<template>
  <div>
    <li v-for="(todo, i) in todos" :key="i">
      {{ todo.title }}
      <TodoItemButton />
    </li>
  </div>
</template>

<script lang="ts">
export default {
  props: ["todos"],
  data() {
    return {};
  }
};
</script>
