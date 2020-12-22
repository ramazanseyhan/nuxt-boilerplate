<template>
  <vs-navbar
    v-model="indexActive"
    :color="colorx"
    text-color="rgba(255,255,255,.6)"
    active-text-color="rgba(255,255,255,1)"
    class="myNavbar"
  >
    <div slot="title">
      <vs-navbar-title>
        LOGO
      </vs-navbar-title>
    </div>

    <vs-navbar-item index="0">
      <a href="#">Home</a>
    </vs-navbar-item>
    <vs-navbar-item index="1">
      <a href="#">News</a>
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <a href="#">Update</a>
    </vs-navbar-item>

    <vs-spacer></vs-spacer>

    <vs-button
      color-text="rgb(255, 255, 255)"
      color="rgba(255, 255, 255, 0.3)"
      type="flat"
      icon="more_horiz"
    ></vs-button>
  </vs-navbar>
</template>

<script>
export default {
  data: () => ({
    colorx: "#222222"
  })
};
</script>

<style lang="scss">
.input-color {
  margin-bottom: 10px;
  position: relative;
  display: block;
}
.myNavbar {
  color: rgb(255, 255, 255);
}
</style>
