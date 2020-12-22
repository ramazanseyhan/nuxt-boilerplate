<template lang="html">
  <div lazy-background="~/assets/test.jpg" class="container"></div>
</template>

<script>
import Test from "../components/Test.vue";
// import LazyHydrate from "vue-lazy-hydration";

export default {
  components: {
    // LazyHydrate,
    // TestComp: () => import("../components/Test.vue"), Test
  },
  mounted() {
    console.log(process.env.TEST_VARIABLE);
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  min-height: 95vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
