<template>
  <q-form
    @submit="onSubmit"
  >
    <slot></slot>
    <q-btn label="Save" color="primary" type="submit"></q-btn>
  </q-form>
</template>

<script>
import {api} from 'boot/axios'
export default {
  name: 'Update',
  methods: {
    onSubmit() {
      let requestConfig = {}
      api.put(
        this.apiUrl,
        this.form,
        requestConfig
      ).then(response => {
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
  },
  props: {
    apiEndpoint: {required: true, type: String},
    storeNamespace: {type:String, default:''},
    form: {required: true, type: Object},
    itemId: {required: true, type: Number}
  },
  emits: ['data-loaded'],
  computed: {
    apiUrl() {
      return this.apiEndpoint + '/' + this.itemId;
    }
  },
  created() {
    let requestConfig = {}

    api.get(
      this.apiUrl,
      requestConfig
    ).then(response => {
      this.$emit('data-loaded', response.data.data);
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
