<template>
  <div class="todoDeleteBtn">
    <button class="todoDeleteBtn__btn" @click="deleteTodo(todo.id)">
      削除
    </button>
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
    const deleteTodo = async (id: string) =>
      context.emit("deleteTodo", id, props.todo);

    return { deleteTodo };
  }
});
</script>

<style scoped lang="scss">
.todoDeleteBtn {
  &__btn {
    border: solid 1px;
  }
}
</style>
