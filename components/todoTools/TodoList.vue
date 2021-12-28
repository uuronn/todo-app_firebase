<template>
  <div>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        {{ todo.todo }}
        <button class="todoList__button">削除</button>
      </li>
      <!-- <TodoItem v-for="(todo, i) in todos" :key="i"/> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: ["todos"]
};
</script>
