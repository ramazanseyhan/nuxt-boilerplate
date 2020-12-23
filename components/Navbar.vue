<template lang="html">
  <vs-row class="font-mono text-2xl font-bold antialiased">
    <vs-navbar
      color="#222"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="text-white pt-2"
    >
      <div slot="title">
        <vs-navbar-title class="pointer">
          <NuxtLink to="/">
            Logo
          </NuxtLink>
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <NuxtLink to="/life">
          Life
        </NuxtLink>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <NuxtLink to="/tester">
          Tester
        </NuxtLink>
      </vs-navbar-item>
    </vs-navbar>
  </vs-row>
</template>
