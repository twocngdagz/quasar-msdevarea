<template>
  <div>
    <template v-if="column.type === 'Fields'">
      <TableField
        v-for="columnsField in column.fields"
        :field="fields[columnsField.key]"
        :item="item"
        :fieldKey="columnsField.key"
        :key="columnsField.key"
        :labeled="getLabeled(columnsField)">
      </TableField>
    </template>
    <template v-else>
      <TableField :field="fields[column.field]" :fieldKey="column.field" :item="item"></TableField>
    </template>
  </div>
</template>

<script>
import TableField from 'components/table/Field.vue'
export default {
  name: "TableColumn",
  components: {
    TableField
  },
  props: {
    item: {
      required: true,
      type: Object
    },
    fields: {
      required: true,
      type: Object
    },
    column: {
      required: true,
      type: Object
    },
    modelKey: {
      required: true,
      type: String
    }
  }, methods: {
    getLabeled(columnsField) {
      if (typeof columnsField.labeled === 'undefined') {
        return true
      }
      return columnsField.labeled ? true : false
    }
  }
}
</script>
