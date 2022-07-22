
<!-- App.vue -->
<template>
  <div>
    <v-app>
      <v-system-bar></v-system-bar>

      <v-navigation-drawer app>
        <!-- -->
      </v-navigation-drawer>

      <v-app-bar app color="primary">
        <v-app-bar-nav-icon> icon</v-app-bar-nav-icon>
        <v-app-bar-title>
          {{ title }}
        </v-app-bar-title>
      </v-app-bar>

      <!-- アプリケーションのコンポーネントに基づいてコンテンツのサイズを決定 -->
      <v-main>
        <!-- アプリケーションに適切なgutterを提供 -->
        <v-container fluid>
          <!-- vue-routerを使用する場合 -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
      <v-bottom-navigation> </v-bottom-navigation>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "テストタイトル",
      msg: "テストメッセージ",
    };
  },
};
</script>