<template>
  <div>
    <fieldset>
      <legend v-if="title">{{ title }}</legend>
      <div v-for="field in fields" :key="field.key">
        <component
          :is="field.type"
          v-model="localValue[field.key]"
          :rules="field.rules"
          :label="field.label"
          :options="field.options"
          :field="field.key"
          :toolbars="field.toolbars"
          :optionLabel="field.optionLabel"
          ></component>
        <div class="hr"></div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import InputText from 'components/input/Text'
import InputTextarea from 'components/input/Textarea';
import InputTeam from 'components/input/Team'
import InputSelect from 'components/input/Select'
export default {
  name: "InputFieldset",
  components: {
    InputText,
    InputTextarea,
    InputTeam,
    InputSelect
  },
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    title: {
      type: String
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
  }
}
</script>
