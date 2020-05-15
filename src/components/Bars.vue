<template>
  <v-row>
    <v-col style="background-color: #255aab; color: white;" cols="12">
      <h3>Confirmados</h3>
      <p>76306</p>
    </v-col>
    <v-col style="background-color: #4DAE76; color: white;" :cols="col_recovered">
      <h3>Recuperados</h3>
      <p>24324</p>
    </v-col>
    <v-col style="background-color: #ff4040; color: white;" :cols="col_active">
      <h3>Activos</h3>
      <p>49813</p>
    </v-col>
    <v-col style="background-color: #424b54; color: white;" :cols="col_deaths">
      <h3>Muertos</h3>
      <p>2169</p>
    </v-col>
  </v-row>
</template>
<script>
export default {
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
  }
};
</script>
<style scoped>
.bar {
}
</style>