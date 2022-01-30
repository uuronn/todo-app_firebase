<template>
  <div class="todoItem">
    <TodoCheckBox />
    {{ todo.title }}
    <TodoDoneBtn :todo="todo" @doneTodo="doneTodo" />
    <TodoDeleteBtn :todo="todo" @deleteTodo="deleteTodo" />
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
    const deleteTodo = async (id: string) =>
      context.emit("deleteTodo", id, props.todo);

    return {
      doneTodo,
      deleteTodo
    };
  }
});
</script>

<style scoped lang="scss">
.todoItem {
  display: flex;
}
</style>
