<template>
  <div class="todoItemButton">
    <button class="todoItemButton__button" @click="deleteTodo(todo.id)">
      削除
    </button>
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
.todoItemButton {
  &__button {
    border: solid 1px;
  }
}
</style>
