<template>
  <q-page padding>
    <BaseListDataSource
      endpoint="addresses"
      :config="requestConfig"
      #default="{ items, meta, loading }">
      {{ items }}
    </BaseListDataSource>
  </q-page>
</template>

<script>
import BaseListDataSource from 'components/base/ListDataSource'
export default {
  components: {
    BaseListDataSource
  },
  data() {
    return {
      queryParams: {
        sort: null,
        filter: {},
        page: 1
      }
    }
  },
  computed: {
    requestConfig() {
      let config = {
        params: {
          page: this.queryParams.page,
          sort: this.queryParams.sort
        }
      }
      for (let filterName in this.queryParams.filter) {
        config.params[`filter[${filterName}]`] = this.queryParams.filter[filterName];
      }
      for (let filterName in this.queryFilter) { // Filter from Parent Component
        config.params[`filter[${filterName}]`] = this.queryFilter[filterName];
      }

      return config
    }
  },
}
</script>
