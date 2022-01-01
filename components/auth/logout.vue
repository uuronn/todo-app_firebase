<template>
  <div class="logout">
    <button class="logout__button" @click="logout">ログアウト</button>
  </div>
</template>

<script>
import { auth } from "@/plugins/firebase";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const logout = async () => {
      try {
        await auth.signOut();
        location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    return {
      logout
    };
  }
});
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
