<template>
  <q-select
    v-model="localValue"
    :options="options"
    :label="label"
    :placeholder="placeholder"
    :id="'input-'+field"
    :name="'input-'+field"
  ></q-select>
</template>

<script>
export default {
  name: 'InputSelect',
  props: {
    field: {
      required: true,
      type: String
    },
    options: {
      required: true,
      type: Array
    },
    label: {
      type: String
    },
    rules: {
      required: false
    },
    placeholder: {
      required: false,
      type: String
    },
    modelValue: {
      type: String,
      required: true
    },
    optionLabel: {
      type: String,
      default: "name"
    },
  },
  emits: ['update:modelValue'],
  computed: {
    localValue: {
      get() {
        return this.options.filter((option) => option.key === this.modelValue)
      },
      set(val) {
        this.$emit('update:modelValue', val.key)
      }
    }
  },
}
</script>
