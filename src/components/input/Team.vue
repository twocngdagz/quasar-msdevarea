<template>
  <div>
    <q-select
      v-model="localValue"
      :id="'input-'+field"
      :name="'input-'+field"
      :placeholder="placeholder"
      :label="label"
      :options="options"
      option-label="name"
    >
      <template v-slot:selected>
        <div v-if="localValue.length > 0">
          {{localValue[0].name}}
        </div>
      </template>
    </q-select>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('team');
export default {
  name: 'InputSelect',
  props: {
    field: {required: true, type: String},
    label: {type: String},
    rules: {required: false},
    placeholder: {required: false, type: String},
    modelValue: {type: Number}
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
    },
    ...mapGetters(['options'])
  },
  created() {
    this.$store.dispatch("team/fetch");
  },
}
</script>
