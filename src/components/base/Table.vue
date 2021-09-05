<template>
  <div>
    <table class="table">
      <thead class="thead-light">
      <tr>
        <th scope="col" v-for="(column,index) in columns" :key="index">
          <div v-if="column.sortField">
            <div style="cursor:pointer" @click="changeSorting(column.sortField)">
              {{ getLabel(column) }}
              <span v-if="sortField===column.sortField">
                {{ sortDirectionAscending?'SORT ASC':'SORT DESC' }}
              </span>
            </div>
          </div>
          <div v-else>
            {{ getLabel(column) }}
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item[modelKey]">
        <td
          v-for="(column,index) in columns"
          :key="item[modelKey]+'-'+index"
        >
          <div v-if="column.type==='Action'">
            <slot
              :name="'actionCell('+column.action+')'"
              :item="item"
            />
          </div>
          <div v-else>
            <TableColumn :item="item" :fields="fields" :column="column" :modelKey="modelKey"></TableColumn>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableColumn from 'components/table/Column.vue'
export default {
  name: "BaseTable",
  components: {
    TableColumn
  },
  props: {
    items: {
      required: true,
      type: Array
    },
    fields: {
      required: true,
      type: Object
    },
    columns: {
      required: true,
      type: Array
    },
    modelKey: {
      type: String,
      default: 'id'
    }
  },
  emits: ['sortingChanged'],
  data() {
    return {
      sortField: null,
      sortDirectionAscending: true
    }
  },

  methods: {
    getLabel(column) {
      if (typeof column.label !== 'undefined') {
        return column.label
      }
      return this.fields[column.field].label
    },
    changeSorting(sortField) {
      if (this.sortField === sortField) {
        if (!this.sortDirectionAscending) {
          this.sortField = null
          this.sortDirectionAscending = true
        } else {
          this.sortDirectionAscending = false
        }
      } else {
        this.sortField = sortField
        this.sortDirectionAscending = true
      }

      let payload = {
        sortBy: this.sortField,
        sortDesc: !this.sortDirectionAscending
      }
      this.$emit('sortingChanged', payload);
    }
  }
}
</script>
