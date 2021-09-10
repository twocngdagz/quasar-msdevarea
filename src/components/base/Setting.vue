<template>
  <div>
    <q-form @submit.stop.prevent="onSubmit">
      <div v-if="settingForm.elements">
        <SettingElements :elements="settingForm.elements" :title="settingForm.title" v-model="settings"></SettingElements>
        <q-btn type="submit">Save</q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
import SettingElements from 'components/setting/Elements'
import { api } from 'boot/axios'
const {mapGetters} = createNamespacedHelpers('settingform');

export default {
  components: {
    SettingElements
  },
  props: {
    module: {required: true, type: String},
  },
  data() {
    return {
      form: {},
    }
  },
  computed: {
    ...mapGetters(['settings', 'settingForm'])
  },
  methods: {
    onSubmit(event) {
      let requestConfig = {}
      this.$store.dispatch('settingform/updateGlobal')
      api.put(
        this.apiUrl,
        this.form,
        requestConfig
      ).then(response => {
        // console.log(response.data)
        this.$emit('dataChanged')
        if (this.storeNamespace !== '') {
          this.$store.dispatch(this.storeNamespace + "/fetch", {reset: true})
        }
        this.$router.push({path: '/' + this.apiEndpoint})
      }).catch(error => {
        if (error.response.data.errors) {
          this.$refs.observer.setErrors(error.response.data.errors);
        } else {
          alert('An error occurred');
        }
      })
    },
  },
  created() {
    this.$store.dispatch('settingform/fetchForm',{module: this.module})
  }
}
</script>
