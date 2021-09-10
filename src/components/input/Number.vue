<template>
  <div>
    <q-input
      :modelValue="modelValue"
      @update:model-value="$emit('update:modelValue', $event);"
      :id="'input-'+field"
      :name="'input-'+field"
      type="type"
      :placeholder="placeholder"
      :label="label"
    ></q-input>
  </div>
</template>

<script>

export default {
  name: "InputNumber",
  props: {
    field: {required: true, type: String},
    label: {type: String},
    rules: {required: false},
    placeholder: {required: false, type: String},
    type: {default: 'number', type: String},
    modelValue: {type: Number}
  }
}
</script>
