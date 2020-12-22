<template lang="html">
  <vs-row class="font-mono text-2xl font-bold antialiased">
    <vs-navbar
      color="#222"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="text-white"
    >
      <div slot="title">
        <vs-navbar-title class="pointer">
          <a href="#">
            Logo
          </a>
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">
          Home
        </a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">
          News
        </a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">
          Update
        </a>
      </vs-navbar-item>
    </vs-navbar>
  </vs-row>
</template>
