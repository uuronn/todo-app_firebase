<template>
  <main class="error">
    <p class="error__title">ページが見つかりません</p>
    <h1>{{ error.message }}</h1>
    <h1 class="error__number">{{ error.statusCode }}</h1>
    <h1>{{ error.path }}</h1>
    <div class="error__wrapper">
      <p class="error__text">ここにテキスト</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  setup(props) {
    return {
      props
    };
  }
});
</script>
