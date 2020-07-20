<template>
  <div>{{text}}</div>
</template>

<script>
import mixin from "./mixins/mixin.js";

export default {
  name: "index",
  mixins: [mixin]
};
</script>