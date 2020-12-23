<template lang="html">
  <vs-row>
    <vs-col class="my-5">
      {{ getUser }}
    </vs-col>
    <vs-col>{{ getToken }}</vs-col>
  </vs-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', ['getUser', 'getToken'])
  },
  created () {
    console.log('page created')
  },
  mounted () {
    console.log('page mounted')
  },

  middleware: ['analytics', 'life'],
  fetch (context) {
    console.log('page fetch')
  },
  validate (context) {
    console.log('page validate')
    return true
  },
  asyncData (context) {
    console.log('page asyncData')
  }
}
</script>
