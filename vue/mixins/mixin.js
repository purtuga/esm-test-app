import * as am4core from '@amcharts/amcharts4/core';

export const mixin = {
  props: {
    text: String
  },
  data() {
    return {
      am4core
    }
  }
};

export default mixin;