<template lang="html">
  <div
    lazy-background="~/assets/bg.png"
    class="bg-no-repeat bg-center bg-cover bg-scroll h-full text-center items-center justify-center"
  >
    <span class="font-3xl md:text-6xl text-white">
      {{ $config.baseURL }}
    </span>
  </div>
</template>

<script>
export default {
  middleware: 'analytics',
  mounted () {
    console.log(this.$config)
  }
}
</script>
