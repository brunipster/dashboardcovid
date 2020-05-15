import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    breakpoint: {
      thresholds: {
        xs: 340,
        sm: 540,
        md: 800,
        lg: 1280,
      },
      scrollBarWidth: 24,
    },
    themes: {
      light: {
        primary: "#4F7CAC",
        secondary: "#FEF9EF",
        accent: "#4F7CAC",
        error: "#80171a",
        info: "#E7E247",
        success: "#4CAF50",
        warning: "#ba6532"
        // primary: "#ee44aa",
        // secondary: "#424242",
        // accent: "#82B1FF",
        // error: "#FF5252",
        // info: "#2196F3",
        // success: "#4CAF50",
        // warning: "#FFC107"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
});
