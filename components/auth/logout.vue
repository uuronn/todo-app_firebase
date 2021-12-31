<template>
  <div class="logout">
    <button class="logout__button" @click="logout">ログアウト</button>
  </div>
</template>

<script>
import { auth } from "@/plugins/firebase";

export default {
  methods: {
    async logout() {
      await auth.signOut();
      location.reload();
    }
  }
};
</script>

<style scoped lang="scss">
.logout {
  position: absolute;
  right: 10px;
  top: 50px;

  &__button {
    border-radius: 8px;
    font-size: 18px;
    background: gray;
  }
}
</style>
