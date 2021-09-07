<template>
  <q-page padding>
    <div>
      <BaseCreate apiEndpoint="addresses" :form="form">
        <InputFieldset :fields="fields" v-model="form"></InputFieldset>
      </BaseCreate>
      {{ form }}
    </div>
  </q-page>
</template>

<script>
import BaseCreate from 'components/base/Create'
import InputFieldset from 'components/input/Fieldset'
export default {
  components: {
    BaseCreate,
    InputFieldset
  },
  data() {
    return {
      form: {},
      fields: [
        {
          key: 'account_id',
          label: 'AccountId',
          type: 'InputText',
        },{
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
  }
}
</script>
