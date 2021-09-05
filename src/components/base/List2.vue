<template>
  <div>
    <q-btn color="primary" label="Anlegen" :to="'/'+apiEndpoint+'/add'"/>
    <div v-if="!dataLoaded">
      <q-spinner
        color="primary"
        size="3em"
      />
    </div>
    <div v-else-if="meta.total > 0 || queryParams.filter.search!==''">
      <div class="p-2">
        <q-form @submit.stop.prevent inline>
          <q-input
            v-model="queryParams.filter.search"
            label="Search"
            debounce="300"
          />
        </q-form>
      </div>

      <BaseTable
        :items="items"
        :fields="fields"
        :columns="columns"
        @sortingChanged="sortingChanged"
      >
        <template
          #actionCell(Show)="row"
        >
          <q-btn flat color="primary" label="Show" @click.prevent="showItem(row.item.id)"/>
        </template>
        <template
          #actionCell(Action)="row"
        >
          <q-btn flat color="primary" label="Delete" @click.prevent="deleteItem(row.item.id)"/>
          <q-btn flat color="primary" label="Edit" @click.prevent="editItem(row.item.id)"/>
        </template>
      </BaseTable>

      <q-pagination
        v-if="dataLoaded && meta.last_page > 1"
        v-model="meta.current_page"
        :max="meta.last_page"
        @update:model-value="pageChange"
      />

<!--      <b-pagination-->

<!--        :value=""-->
<!--        :total-rows="meta.total"-->
  <!--        :per-page="meta.per_page"-->
<!--        aria-controls="my-table"-->
<!--        @input="pageChange"-->
<!--      ></b-pagination>-->
    </div>
  </div>
</template>

<script>
import {api} from 'boot/axios'
import BaseTable from 'components/base/Table.vue'
import { debounce } from 'quasar'
export default {
  name: 'BaseList2',
  components: {
    BaseTable
  },
  props: {
    fields: {required: true, type: Object},
    columns: {required: true, type: Array},
    apiEndpoint: {required: true, type: String},
    storeNamespace: {type:String, default:''},
    queryFilter: {type: Object}
  },
  emits: ['dataChanged','itemDeleted'],
  data() {
    return {
      dataLoaded: false,
      items: [],
      meta: {},
      queryParams: {
        sort: null,
        filter: {},
        page: 1
      },
      searchText: ''
    }
  },
  watch: {
    'queryParams.filter.search': function () {
      this.search()
    }
  },
  created() {
    this.fetchItems();
  },
  methods: {
    pageChange(page) {
      this.queryParams.page = page
      this.fetchItems();
    },
    search() {
      this.queryParams.page = 1
      this.fetchItems();
    },
    sortingChanged(ctx) {
      // ctx.sortBy   ==> Field key for sorting by (or null for no sorting)
      // ctx.sortDesc ==> true if sorting descending, false otherwise
      this.queryParams.page = 1
      if (ctx.sortBy === null) {
        this.queryParams.sort = null;
      } else {
        this.queryParams.sort = (ctx.sortDesc ? '-' : '') + ctx.sortBy
      }

      this.fetchItems();
    },
    fetchItems() {
      let requestConfig = {
        params: {
          page: this.queryParams.page,
          sort: this.queryParams.sort
        }
      }
      for (let filterName in this.queryParams.filter) {
        requestConfig.params[`filter[${filterName}]`] = this.queryParams.filter[filterName];
      }
      for (let filterName in this.queryFilter) { // Filter from Parent Component
        requestConfig.params[`filter[${filterName}]`] = this.queryFilter[filterName];
      }

      api.get(
        this.apiEndpoint,
        requestConfig
      ).then(response => {
        this.items = response.data.data
        this.meta = response.data.meta
        this.dataLoaded = true
      }).catch((error) => {
        console.log(error)
      })
    },
    deleteItem(id) {
      api.delete(this.apiEndpoint + '/' + id)
        .then(response => {
          this.$emit('dataChanged')
          this.$emit('itemDeleted',id);
          if (this.storeNamespace) {
            this.$store.dispatch(this.storeNamespace+"/remove",{id:id})
          }
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
    }
  }

}

</script>
