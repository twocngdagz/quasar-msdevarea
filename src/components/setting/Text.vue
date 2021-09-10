<template>
  <div>
    <InputText
      :field="field"
      :label="label"
      :modelValue="localValue[module][token]"
      @update:modelValue="onInput"
    ></InputText>
  </div>
</template>

<script>
import InputText from 'components/input/Text'
export default {
  name: "SettingText",
  components: {
    InputText
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
      }
    }
  },
  methods: {
    onInput(value) {
      this.$store.commit('settingform/UPDATE_ITEM_VALUE', {
        module: this.module,
        token: this.token,
        value
      })
    }
  }
}
</script>
