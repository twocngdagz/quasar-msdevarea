<template>
  <BaseListDataSource
    :endpoint="apiEndpoint"
    :config="requestConfig"
    #default="{items, meta, loading, fetch, endpoint}"
  >
    <div>
      <BaseList3
        :items="items"
        :meta="meta"
        :fields="tableFields"
        :loading="loading"
        @pageChange="pageChange($event, fetch)"
        @searchTextChange="search($event, fetch)"
        @sortingChanged="sortingChanged($event, fetch)"
        @showItem="showItem"
        @editItem="editItem"
        @deleteItem="deleteItem($event, fetch)"
        @addItem="addItem"
      >
        <template #show="{id}">
          <BaseRelatedView
            :endpoint="endpoint"
            :id="id"
            #default="{item}"
            v-if="showView && id"
          >
            <div>
              <OutputFieldset
                :item="item"
                :fields="showFields"
                title="Address"
                v-if="item">
              </OutputFieldset>
              <q-btn type="submit" @click="showView = false" label="Close"></q-btn>
            </div>
          </BaseRelatedView>
        </template>
        <template #edit="{id}">
          <BaseRelatedUpdate
            :endpoint="endpoint"
            #default="{onSubmit, form}"
            :id="id"
            v-if="showEdit && id"
            @success="editSuccess(fetch)"
          >
            <q-form @submit.stop.prevent="onSubmit">
              <InputFieldset
                :fields="updateFields"
                v-model="form">
              </InputFieldset>
              <q-btn type="submit" label="Save"></q-btn>
            </q-form>
          </BaseRelatedUpdate>
        </template>
        <template #add>
          <BaseRelatedCreate
            :endpoint="endpoint"
            #default="{onSubmit, form}"
            v-if="showAdd"
            :id="relatedValue"
            :related-key="relatedKey"
            @success="createSuccess(fetch)"
          >
            <q-form @submit.stop.prevent="onSubmit">
              <InputFieldset
                :fields="addFields"
                v-model="form">
              </InputFieldset>
              <q-btn type="submit" label="Save"></q-btn>
            </q-form>
          </BaseRelatedCreate>
        </template>
      </BaseList3>
    </div>
  </BaseListDataSource>
</template>
<script>
import { api } from 'boot/axios'
import BaseListDataSource from 'components/base/ListDataSource'
import BaseList3 from 'components/base/List3'
import BaseRelatedCreate from 'components/base/RelatedCreate'
import BaseRelatedUpdate from 'components/base/RelatedUpdate'
import BaseRelatedView from 'components/base/RelatedView'
import OutputFieldset from 'components/output/Fieldset'
import InputFieldset from 'components/input/Fieldset'
export default {
  name: "RelatedList",
  components: {
    BaseListDataSource,
    BaseList3,
    BaseRelatedCreate,
    BaseRelatedUpdate,
    BaseRelatedView,
    OutputFieldset,
    InputFieldset
  },
  props: {
    tableFields: {required: true, type: Array},
    apiEndpoint: {required: true, type: String},
    relatedKey: {type: String, required: true},
    relatedValue: {type: Number, required: true},
    showFields: {required: true, type: Array},
    addFields: {required: true, type: Array},
    updateFields: {required: true, type: Array},
  },
  data() {
    return {
      queryParams: {
        sort: null,
        filter: {},
        page: 1
      },
      showView: false,
      showEdit: false,
      showAdd: false,
      updateForm: {},
      createForm: {}
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
      config.params[`filter[${this.relatedKey}]`] = this.relatedValue

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
      this.queryParams.filter = {search: value}
      this.$nextTick(() => {
        fetch()
      })
    },
    sortingChanged(ctx, fetch) {
      this.queryParams.page = 1
      this.queryParams.sort = (ctx.sortDesc ? '-' : '') + ctx.sortBy
      this.$nextTick(() => {
        fetch()
      })
    },
    deleteItem(id, fetch) {
      api.delete(this.apiEndpoint + '/' + id)
        .then(response => {
          fetch()
        })
        .catch(error => {
          console.log(error)
        })
    },
    editItem() {
      this.showEdit = true
    },
    showItem() {
      this.showView = true
    },
    addItem() {
      this.showAdd = true
    },
    createSuccess(fetch) {
      this.showAdd = false
      fetch()
    },
    editSuccess(fetch) {
      this.showEdit = false
      fetch()
    }
  }
}
</script>

