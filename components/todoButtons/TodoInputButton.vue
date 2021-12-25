<template>
  <div class="todoInputButton">
    <button class="todoInputButton__addButton" @click="addTodo">追加</button>
  </div>
</template>

<style scoped lang="scss">
.todoInputButton {
  &__addButton {
    border: solid 1px;
  }
}
</style>
