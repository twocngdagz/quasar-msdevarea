<template>
  <q-page padding>
    <BaseSetting :module="$route.params.module" v-if="settings[$route.params.module]"></BaseSetting>
  </q-page>
</template>

<script>
import BaseSetting from 'components/base/Setting'
import {createNamespacedHelpers} from "vuex";
const {mapGetters} = createNamespacedHelpers('settingform');
export default {
  components: {
    BaseSetting
  },
  computed: {
    ...mapGetters(['settings'])
  },
}
</script>
