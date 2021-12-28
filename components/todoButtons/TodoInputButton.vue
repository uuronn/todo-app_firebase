<template>
  <div class="todoInputButton">
    <button class="todoInputButton__addButton" @click="addTodo">追加</button>
  </div>
</template>

<script>
export default {
  methods: {
    addTodo() {
      this.$emit("addTodo");
    }
  }
};
</script>

<style scoped lang="scss">
.todoInputButton {
  &__addButton {
    border: solid 1px;
    width: 80px;
    height: 20px;
  }
}
</style>
