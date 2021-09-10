<template>
  <div>
    <q-checkbox
      :modelValue="modelValue"
      :label="label"
      :true-value="checkedValue"
      :false-value="uncheckedValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    >
    </q-checkbox>
  </div>
</template>

<script>
export default {
  name: "InputCheckbox",
  props: {
    field: {required: true, type: String},
    label: {type: String},
    rules: {required: false},
    placeholder: {required: false, type: String},
    modelValue: {type: Boolean},
    checkedValue: {default: true},
    uncheckedValue: {default: false},
  },
}
</script>
