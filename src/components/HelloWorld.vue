<template>
  <v-container>
    <v-row class="text-center">
      <hero />
      <bars />
    </v-row>
  </v-container>
</template>

<script>
import hero from "./Hero";
import bars from "./Bars";
export default {
  name: "HelloWorld",
  components: {
    hero,
    bars
  },
  data: () => ({
    recovered: 24324,
    active: 49813,
    deaths: 2169,
    confirmed: 76306
  }),
  computed: {
    col_deaths: function() {
      return Math.ceil((12 * this.deaths) / this.confirmed);
    },
    col_active: function() {
      return Math.ceil((12 * this.active) / this.confirmed) - 1;
    },
    col_recovered: function() {
      return Math.ceil((12 * this.recovered) / this.confirmed);
    }
  },
  created: function() {}
};
</script>

