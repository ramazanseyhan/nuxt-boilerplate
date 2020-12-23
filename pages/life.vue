<template lang="html">
  <vs-row>
    <vs-list v-if="getUser" class="p-2">
      <vs-list-header title="Current User Information" color="success" />
      <vs-list-item title="First Name" :subtitle="getUser.name.first" />
      <vs-list-item title="Last Name" :subtitle="getUser.name.last" />
      <vs-list-item
        title="Timezone"
        :subtitle="getUser.location.timezone.description"
      />
      <vs-list-item title="Age" :subtitle="getUser.dob.age" />
      <vs-list-item title="Date" :subtitle="getUser.registered.date" />
    </vs-list>
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
