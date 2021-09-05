<template>
  <div>
    <q-input
      v-model="value"
      @update:model-value="$emit('input', $event);"
      :id="'input-'+field"
      :name="'input-'+field"
      type="number"
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
    value: {type: Number}
  }
}
</script>
