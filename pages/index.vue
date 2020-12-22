<template lang="html">
  <div lazy-background="~/assets/test.jpg" class="container"></div>
</template>

<script>
export default {
  mounted() {
    console.log(process.env.TEST_VARIABLE);
  }
};
</script>

<style>
.container {
  min-height: 95vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
