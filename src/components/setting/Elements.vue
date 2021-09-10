<template>
  <section :style="{marginLeft: (layer*3)+'em'}">
    <h1 v-if="title">{{ title }}</h1>
    <div v-for="(element,index) in elements" :key="index">
      <component
        v-if="element.active"
        :is="element.componentType"
        :elements="element.elements"
        :label="element.label"
        :title="element.title"
        :field="element.key"
        :payload="element.payload"
        :layer="layer+1"
        :modelValue="modelValue"
        @update:modelValue="onInput"
      >
      </component>
    </div>
  </section>
</template>

<script>
import SettingCheckbox from 'components/setting/Checkbox'
import SettingNumber from 'components/setting/Number'
import SettingText from 'components/setting/Text'
import SettingSelect from 'components/setting/Select'
export default {
  name: "SettingElements",
  components: {
    SettingCheckbox,
    SettingNumber,
    SettingText,
    SettingSelect
  },
  emits: ['update:modelValue'],
  props: {
    elements: {
      required: true,
      type: Array
    },
    title: {
      type: String
    },
    layer: {
      type: Number,
      default: 0
    },
    modelValue: {
      type: Object,
      require: true
    }
  },
  methods: {
    onInput(value) {
      console.log(value)
      this.$emit('update:modelValue', value)
    }
  },
}
</script>
