<template>
  <div class="todoInput">
    <input class="todoInput__form" type="text" placeholder="taskName" />
    <TodoInputButton />
  </div>
</template>

<style scoped lang="scss">
.todoInput {
  display: flex;
  &__form {
    border: solid 1px;
  }
}
</style>
