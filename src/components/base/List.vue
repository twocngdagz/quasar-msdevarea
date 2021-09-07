<template>
  <q-page padding>
    <BaseListDataSource
      :endpoint="apiEndpoint"
      :config="requestConfig"
      #default="{ items, meta, loading, fetch }">
      <BaseList3
        v-if="items.length > 0"
        :items="items"
        :meta="meta"
        :fields="fields"
        :loading="loading"
        @pageChange="pageChange($event, fetch)"
        @searchTextChange="search($event, fetch)"
        @sortingChanged="sortingChanged($event, fetch)"
        @showItem="showItem"
        @editItem="editItem"
        @deleteItem="deleteItem"
        @addItem="addItem"
      ></BaseList3>
    </BaseListDataSource>
  </q-page>
</template>

<script>
import BaseListDataSource from 'components/base/ListDataSource'
import BaseList3 from 'components/base/List3'
import api from 'boot/axios'
export default {
  name: 'BaseList',
  components: {
    BaseListDataSource,
    BaseList3
  },
  props: {
    fields: {required: true, type: Array},
    apiEndpoint: {required: true, type: String},
    queryFilter: {type: Object}
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
  methods: {
    pageChange(page, fetch) {
      this.queryParams.page = page
      this.$nextTick(() => {
        fetch()
      })
    },
    search(value, fetch) {
      this.queryParams.page = 1
      this.queryParams.filter={search: value}
      this.$nextTick(() => {
        fetch()
      })
    },
    sortingChanged(ctx, fetch) {
      // ctx.sortBy   ==> Field key for sorting by (or null for no sorting)
      // ctx.sortDesc ==> true if sorting descending, false otherwise
      this.queryParams.page = 1
      this.queryParams.sort = (ctx.sortDesc ? '-' : '') + ctx.sortBy
      this.$nextTick(() => {
        fetch()
      })
    },
    deleteItem(id) {
      api.delete(this.apiEndpoint + '/' + id)
        .then(response => {
          let pos = this.items.findIndex(item => item.id === id)
          if (pos !== null) {
            this.items.splice(pos, 1)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    editItem(id) {
      this.$router.push({path: '/' + this.apiEndpoint + '/' + id + '/edit'});
    },
    showItem(id) {
      this.$router.push({path: '/' + this.apiEndpoint + '/' + id});
    },
    addItem() {
      this.$router.push({path: '/' + this.apiEndpoint + '/add' });
    }
  }
}
</script>
