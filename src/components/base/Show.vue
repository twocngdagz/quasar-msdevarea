<template>
  <div>
    <q-btn color="primary" label="Back" :to="'/'+apiEndpoint"/>
    <slot></slot>
  </div>
</template>

<script>
import {api} from 'boot/axios'
export default {
  name: "Show",
  props: {
    apiEndpoint: {required: true, type: String},
    item: {required: true, type: Object},
    itemId: {required: true, type: Number}
  },
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
