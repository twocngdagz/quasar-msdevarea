<template>
  <div>
    <BaseShow apiEndpoint="addresses" :itemId="Number.parseInt($route.params.id)" :item="item" @data-loaded="dataLoaded">
      <OutputFieldset :item="item" :fields="fields" title="Kunde"></OutputFieldset>
    </BaseShow>
  </div>
</template>

<script>
import BaseShow from 'components/base/Show'
import OutputFieldset from 'components/output/Fieldset'
export default {
  components: {
    BaseShow,
    OutputFieldset
  },
  data() {
    return {
      item: {},
      fields: [
        {
          key: 'address_addition',
          label: 'Adresszusatz',
        }, {
          key: 'street',
          label: 'Straße',
        }, {
          key: 'house_number',
          label: 'Hausnummer',
        }, {
          key: 'postal_code',
          label: 'Postleitzahl',
        }, {
          key: 'city',
          label: 'Ort',
        }, {
          key: 'country',
          label: 'Land',
        }
      ]
    }
  },
  methods: {
    dataLoaded(item) {
      this.item = item
    }
  }
}
</script>
