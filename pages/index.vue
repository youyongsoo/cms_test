
<!-- App.vue -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ケアレボ</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height">
        <v-row>
          <v-col class="text-center">
            <v-btn><v-icon large>mdi-code-tags</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
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