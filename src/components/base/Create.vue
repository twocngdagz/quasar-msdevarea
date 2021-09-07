<template>
  <q-form @submit.stop.prevent="onSubmit">
    <slot></slot>
    <q-btn label="Save" color="primary" type="submit">Save</q-btn>
  </q-form>
</template>

<script>
import { api } from 'boot/axios'
export default {
  name: 'BaseCreate',
  props: {
    apiEndpoint: {required: true, type: String},
    storeNamespace: {type:String, default:''},
    form: {required: true, type: Object}
  },
  emits: ['dataChanged'],
  methods: {
    onSubmit(event) {
      let requestConfig = {}
      api.post(
        this.apiEndpoint,
        this.form,
        requestConfig
      ).then(response => {
        this.$emit('dataChanged')
        if (this.storeNamespace !== '') {
          this.$store.dispatch(this.storeNamespace+"/fetch",{reset: true})
        }
        this.$router.push({path: '/' + this.apiEndpoint})
      }).catch(error => {
        if (error.response.data.errors) {
          this.$refs.observer.setErrors(error.response.data.errors);
        } else {
          alert('An error occurred');
        }
      })
    }
  }
}
</script>
