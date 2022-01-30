<template>
  <div class="todoDoneBtn">
    <button class="todoDoneBtn__btn" @click="doneTodo(todo.id)">完了</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@nuxtjs/composition-api";

type Props = {
  todo: object;
};

export default defineComponent({
  props: {
    todo: {
      type: Object
    }
  },
  setup(props: Props, context: SetupContext) {
    const doneTodo = async (id: string) =>
      context.emit("doneTodo", id, props.todo);

    return { doneTodo };
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
