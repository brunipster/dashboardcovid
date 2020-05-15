<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="primary"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-col md="3"></v-col>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-col md="3" sm="12">
        <p class="ma-auto body-2 float-right">
          <strong>{{ ($vuetify.breakpoint.mdAndUp?"Last Update: ":"")}}</strong>30.12.2020 12:45
        </p>
      </v-col>
    </v-app-bar>

    <v-content class="secondary">
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
