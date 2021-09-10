<template>
  <div>
    <InputNumber
      :field="field"
      :label="label"
      :modelValue="parseInt(localValue[module][token])"
      @update:modelValue="onInput"
    ></InputNumber>
  </div>
</template>

<script>
import InputNumber from 'components/input/Number'
export default {
  name: "SettingNumber",
  components: {
    InputNumber
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
      console.log('setting number ' + value)
      this.$store.commit('settingform/UPDATE_ITEM_VALUE', {
        module: this.module,
        token: this.token,
        value
      })
    }
  }
}
</script>
