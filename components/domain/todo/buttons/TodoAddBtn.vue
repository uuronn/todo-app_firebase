<template>
  <div class="todoAddBtn">
    <button class="todoAddBtn__addButton" @click="addTodo">追加</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@nuxtjs/composition-api";

type Props = {
  todoName: String;
};

export default defineComponent({
  setup(props: Props, context: SetupContext) {
    const addTodo = () => context.emit("addTodo", props.todoName);

    return { addTodo };
  }
});
</script>

<style scoped lang="scss">
.todoAddBtn {
  &__addButton {
    border: solid 1px;
    width: 80px;
    height: 20px;
  }
}
</style>
