<template>
  <q-page padding>
    <slot name="show" :id="id"></slot>
    <slot name="add"></slot>
    <slot name="edit" :id="id"></slot>
    <q-btn
      color="primary"
      label="Anlegen"
      @click="addItem"
    ></q-btn>

    <div>
      <q-table
        title="Addresses"
        :rows="items"
        :columns="fields"
        v-model:pagination="pagination"
        @request="pageChange"
        row-key="id"
        :loading="loading"
        :filter="searchText"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="searchText" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </template>
        <template #body-cell-show="props">
          <q-td>
            <q-btn flat @click.prevent="showItem(props.row.id)">Show</q-btn>
          </q-td>
        </template>
        <template #body-cell-action="props">
          <q-btn-dropdown>
            <q-btn flat @click.prevent="deleteItem(props.row.id)">Delete</q-btn>
            <q-btn flat @click.prevent="editItem(props.row.id)">Edit</q-btn>
          </q-btn-dropdown>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "List3",
  props: {
    items: {
      type: Array,
      required: true
    },
    meta: {
      type: Object,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    searchText(value) {
      this.$emit('searchTextChange', value)
    }
  },
  data() {
    return {
      searchText: "",
      id: null,
      pagination: {
        page: this.meta.current_page,
        rowsPerPage: this.meta.per_page,
        rowsNumber: this.meta.total
      }
    }
  },
  methods: {
    pageChange({ pagination }) {
      this.pagination.page = pagination.page
      this.pagination.rowsPerPage = pagination.rowsPerPage
      this.pagination.rowsNumber = pagination.rowsNumber
      this.$emit('pageChange', pagination.page)
    },
    sortingChanged(ctx) {
      this.$emit('sortingChanged', ctx)
    },
    deleteItem(id) {
      this.$emit('deleteItem', id)
    },
    editItem(id) {
      this.id = id
      this.$emit('editItem', id)
    },
    showItem(id) {
      this.id = id
      this.$emit('showItem', id)
    },
    addItem() {
      this.$emit('addItem')
    }
  }
}
</script>
