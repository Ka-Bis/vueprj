import Vue from "vue";
import VueMoment from "vue-moment";
import moment from "moment-timezone";
Vue.use(VueMoment, { moment });
Vue.filter("formatDate", (value) => {
  if (value)
    return moment(value)
      .tz("Europe/Paris")
      .format("MM/DD/YYYY")
      .toString();
});
