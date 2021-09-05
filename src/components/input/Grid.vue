<template>
  <div class="row">
    <div v-for="(grid, gridIndex) in grids" :class="colClass(grid.width)" :key="gridIndex">
      <InputFieldset v-for="(fieldset,fieldsetIndex) in grid.fieldsets" :fields="fieldset.fields"
                     :title="fieldset.title" v-model="localValue" :key="fieldsetIndex"></InputFieldset>
    </div>
  </div>
</template>

<script>
import InputFieldset from 'components/input/Fieldset'
export default {
  name: "InputGrid",
  components: {
    InputFieldset
  },
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    grids: {
      type: Array,
      required: true
    }
  },
  emits: ['update:modelValue'],
  computed: {
    localValue: {
      get() {
        return this.modelValue
      },
      set(val) {
          this.$emit('update:modelValue', val)
      }
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
