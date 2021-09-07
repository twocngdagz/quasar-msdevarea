<template>
  <div>
    <BaseUpdate apiEndpoint="addresses" :itemId="Number.parseInt($route.params.id)" :form="form" @data-loaded="dataLoaded">
      <InputFieldset :fields="fields" v-model="form"></InputFieldset>
    </BaseUpdate>
  </div>
</template>

<script>
import BaseUpdate from 'components/base/Update'
import InputFieldset from 'components/input/Fieldset'
export default {
  components: {
    BaseUpdate,
    InputFieldset
  },
  data() {
    return {
      form: {},
      fields: [
        {
          key: 'address_addition',
          label: 'Adresszusatz',
          type: 'InputText',
        }, {
          key: 'street',
          label: 'Straße',
          type: 'InputText',
        }, {
          key: 'house_number',
          label: 'Hausnummer',
          type: 'InputText',
        }, {
          key: 'postal_code',
          label: 'Postleitzahl',
          type: 'InputText',
        }, {
          key: 'city',
          label: 'Ort',
          type: 'InputText',
        }, {
          key: 'country',
          label: 'Land',
          type: 'InputText',
        }
      ]
    }
  },
  methods: {
    dataLoaded(formData) {
      this.form = formData
    }
  }
}
</script>
