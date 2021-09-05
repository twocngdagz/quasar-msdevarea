<template>
  <div>
    <q-input
      v-model="modelValue"
      @update:model-value="$emit('update:modelValue', $event);"
      :id="'input-'+field"
      :name="'input-'+field"
      type="text"
      :placeholder="placeholder"
      :label="label"
    ></q-input>
  </div>
</template>

<script>

export default {
  name: "InputText",
  props: {
    field: {required: true, type: String},
    label: {type: String},
    rules: {required: false},
    placeholder: {required: false, type: String},
    type: {default: 'text', type: String},
    modelValue: {type: String}
  }
}
</script>
