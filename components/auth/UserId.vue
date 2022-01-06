<template>
  <div class="userId">
    <p class="userId__content">ユーザー名:{{ userId }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/plugins/firebase";

export default defineComponent({
  setup() {
    const userId = ref("");

    // ログイン状態を維持させるためのコード
    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          userId.value = user.uid;
        }
      });
    });
    return {
      userId
    };
  }
});
</script>

<style scoped lang="scss">
.userId {
  position: absolute;
  top: 0;
}
</style>
