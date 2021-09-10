<template>
  <div>
    <InputSelect
      :field="field"
      :label="label"
      :options="optionsArray"
      option-label="label"
      :modelValue="modelValue[module][token]"
      @update:modelValue="onInput"
    ></InputSelect>
  </div>
</template>

<script>
import InputSelect from 'components/input/Select'
export default {
  name: "SettingSelect",
  components: {
    InputSelect
  },
  props: {
    label: {
      type: String
    },
    field: {
      type: String,
      required: true
    },
    payload: {
      type: Object
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
    optionsArray() {
      let options = [];
      for(let [key,value] of Object.entries(this.payload.options)) {
        options.push({key:key, value:key, label: value})
      }
      return options
    },
  },
  methods: {
    onInput(value) {
      this.$store.commit('settingform/UPDATE_ITEM_VALUE', {
        module: this.module,
        token: this.token,
        value
      })
      this.$store.commit('settingform/UPDATE_ELEMENTS')
      this.$forceUpdate()
    }
  }
}
</script>
