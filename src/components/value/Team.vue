<template>
  <span>
    <q-avatar icon="account_circle" class="q-mr-sm  " text="AB" :style="{background: color()}"></q-avatar>
    <span class="mr-auto">{{ name() }}</span>
  </span>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('team');
export default {
  name: "ValueTeam",
  props: {
    value: {
      type: Number
    }
  },
  methods: {
    name() {
      let team = this.byId(this.value)
      if (!team) {
        return ''
      }
      return team.name
    },
    color() {
      let team = this.byId(this.value)
      if (!team || !team.color) {
        return ''
      }
      return team.color
    },
  },
  created() {
    this.$store.dispatch("team/fetch");
  },
  computed: {
    ...mapGetters(['byId'])
  }
}
</script>
