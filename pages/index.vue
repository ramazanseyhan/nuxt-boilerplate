<template lang="html">
  <div
    lazy-background="~/assets/bg.png"
    class="bg-no-repeat bg-center bg-cover bg-scroll h-full text-center items-center justify-center"
  ></div>
</template>

<script>
export default {
  middleware: "analytics",
  mounted() {
    console.log(process.env.TEST_VARIABLE);
  }
};
</script>
