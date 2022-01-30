<template>
  <div class="todoDoneBtn">
    <button class="todoDoneBtn__btn" @click="doneTodo(todo.id)">完了</button>
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
.todoDoneBtn {
  &__btn {
    border: solid 1px;
  }
}
</style>
