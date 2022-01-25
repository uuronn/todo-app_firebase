<template>
  <div class="todoItemButton">
    <button class="todoItemButton__button" @click="doneTodo(todo.id)">
      完了
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["todo"],
  methods: {
    doneTodo(id: string) {
      this.$emit("doneTodo", id);
    }
  }
});
</script>

<style scoped lang="scss">
.todoItemButton {
  &__button {
    border: solid 1px;
  }
}
</style>
