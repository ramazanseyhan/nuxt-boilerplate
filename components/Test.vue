<template lang="html">
  <vs-list>
    <vs-list-item title="One text" />
    <vs-list-item title="Another text" subtitle="A little text" />
    <vs-list-item title="Some more text" />
    <vs-list-item title="Even more text" subtitle="Another little text" />
  </vs-list>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style>
.item {
  width: 100px;
}
</style>
