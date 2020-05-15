<template>
  <div>
    <v-container class="absolute">
      <v-row align="center" justify="center">
        <v-col md="3">
          <p class="p-title text-center">CO</p>
        </v-col>
        <v-col md="1"></v-col>
        <v-col md="3">
          <p class="p-title text-left pl-3">ID</p>
        </v-col>
      </v-row>
    </v-container>
    <v-col cols="12">
      <v-sparkline
        :value="valueSparkline"
        :gradient="color"
        smooth="5"
        gradient-direction="left"
        type="trend"
        auto-draw
      ></v-sparkline>
    </v-col>
  </div>
</template>
<script>
export default {
  data: () => ({
    valueSparkline: [4, 1, 4, 2, 6, 3, 10, 0, 10, 4, 8, 4, 3, 7, 5],
    color: [
      "#fef9ef",
      "#A2CBDE",
      "#A2CBDE",
      "#4F7CAC",
      "#A2CBDE",
      "#A2CBDE",
      "#fef9ef"
    ]
  })
};
</script>
<style scoped>
.absolute {
  position: absolute;
}

.b-red {
  border: 1px solid red;
}

.p-title {
  font-size: 200px;
  margin: auto;
  justify-self: center;
}
</style>