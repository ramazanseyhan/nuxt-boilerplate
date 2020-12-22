<template>
  <vs-list>
    <img
      class="item my-2"
      data-src="~/assets/dummy.jpg"
      alt=""
      title=""
      v-lazy-load
    />
    <vs-list-item title="One text"></vs-list-item>
    <vs-list-item title="Another text" subtitle="A little text"></vs-list-item>
    <vs-list-item title="Some more text"></vs-list-item>
    <vs-list-item
      title="Even more text"
      subtitle="Another little text"
    ></vs-list-item>
  </vs-list>
</template>

<script>
export default {};
</script>

<style>
.item {
  width: 100px;
}
</style>
