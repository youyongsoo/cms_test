
<template>
  <!-- <form @submit.prevent="login">
    <p v-if="loginStatus !== null" :style="{ color: resultMessageColor }">
      {{ resultMessage }}
    </p>
    <input v-model="email" name="email" type="email" placeholder="email" />
    <input
      v-model="password"
      name="password"
      type="password"
      placeholder="password"
    />
    <button type="submit">ログイン</button>
    <div>
      <nuxt-link to="/news"> ニュース一覧ページへ </nuxt-link>
    </div>
  </form> -->
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="ユーザ名"
            v-model="username"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock"
            label="パスワード"
            v-model="password"
          />
          <v-card-actions>
            <v-btn @click="submit">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,

      loginStatus: null,
      resultMessage: null,
    };
  },
  computed: {
    resultMessageColor() {
      switch (this.loginStatus) {
        case "success":
          return "green";
        case "failure":
          return "red";
        default:
          return "";
      }
    },
  },
  methods: {
    async login() {
      // ダミーリクエスト(1秒待機の後成功/失敗する)

      try {
        const payload = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch("login", payload);

        this.loginStatus = "success";
        this.resultMessage = "ログインに成功しました。";
      } catch (e) {
        this.loginStatus = "failure";
        this.resultMessage = "ログインに失敗しました。";
      }
    },
    submit() {
      console.log(this.username, this.password);
    },
  },
};
</script>