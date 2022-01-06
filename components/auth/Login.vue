<template>
  <div class="login">
    <button class="login__button" @click="loginhandler">ログイン</button>
  </div>
</template>

<script>
import { auth } from "@/plugins/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence
} from "firebase/auth";

export default {
  methods: {
    loginhandler() {
      const provider = new GoogleAuthProvider();
      //     setPersistence(auth, inMemoryPersistence)
      // .then(() => {
      //   const provider = new GoogleAuthProvider();
      //   // In memory persistence will be applied to the signed in Google user
      //   // even though the persistence was set to 'none' and a page redirect
      //   // occurred.
      //   return signInWithRedirect(auth, provider);
      // })
      // .catch((error) => {
      //   // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // });

      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return signInWithEmailAndPassword(auth, email, password);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });

      /*ユーザーがログインしているかどうかを取得 */
      //   const user = auth.currentUser;
      // if (user) {
      //   // User is signed in, see docs for a list of available properties
      //   // https://firebase.google.com/docs/reference/js/firebase.User
      //   // ...
      // } else {
      //   // No user is signed in.
      // }
      // ---------------------------------------------------ここまで

      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          // The signed-in user info.
          // this.userId = user.uid

          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  position: absolute;
  right: 10px;
  top: 10px;

  &__button {
    border-radius: 8px;
    font-size: 18px;
    background: gray;
  }
}
</style>
