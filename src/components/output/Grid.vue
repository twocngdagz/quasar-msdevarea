<template>
  <div class="row">
    <div v-for="(grid, gridIndex) in grids" :class="colClass(grid.width)" :key="gridIndex">
      <OutputFieldset
        v-for="(fieldset,fieldsetIndex) in grid.fieldsets"
        :fields="fieldset.fields"
        :item="item"
        :title="fieldset.title"
        :key="fieldsetIndex"
      ></OutputFieldset>
    </div>
  </div>
</template>

<script>
import OutputFieldset from 'components/output/Fieldset.vue'
export default {
  name: "OutputGrid",
  components: {
    OutputFieldset
  },
  props: {
    grids: {
      type: Array,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    colClass(width) {
      if (width) {
        return ['col-' + width];
      }
      return ['col']
    }
  }
}
</script>
