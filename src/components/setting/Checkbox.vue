<template>
  <div>
    <InputCheckbox
      :field="field"
      :label="label"
      :modelValue="localValue[module][token]"
      @update:modelValue="onInput"
    ></InputCheckbox>
  </div>
</template>

<script>
import InputCheckbox from 'components/input/Checkbox'
export default {
  name: "SettingCheckbox",
  components: {
    InputCheckbox
  },
  props: {
    label: {
      type: String
    },
    field: {
      type: String,
      required: true
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  computed: {
    module() {
      let [module,_] = this.field.split('.')
      return module;
    },
    token() {
      let [_,token] = this.field.split('.')
      return token;
    },
    localValue: {
      get() {
        return this.modelValue
      },
    }
  },
  methods: {
    onInput(value) {
      console.log(value)
      this.$store.commit('settingform/UPDATE_ITEM_VALUE', {
        module: this.module,
        token: this.token,
        value
      })
      this.$store.commit('settingform/UPDATE_ELEMENTS')
    }
  },
}
</script>
