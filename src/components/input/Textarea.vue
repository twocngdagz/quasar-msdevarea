<template>
  <div>
    <q-input
      v-model="modelValue"
      @update:model-value="$emit('update:modelValue', $event);"
      :id="'input-'+field"
      :name="'input-'+field"
      type="textarea"
      :placeholder="placeholder"
      :label="label"
    ></q-input>
  </div>
</template>

<script>

export default {
  name: "InputTextarea",
  props: {
    modelValue: {type: String},
    field: {required: true, type: String},
    label: {type: String},
    rules: {required: false},
    placeholder: {required: false, type: String},
    rows: {default: 3, type: Number},
    maxRows: {default: 8, type: Number},
  }
}
</script>
