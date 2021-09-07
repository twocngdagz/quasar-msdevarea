<template>
  <BaseList
    api-endpoint="addresses"
    :fields="[
      {name: 'show', label: '', field: '', align: 'left'},
      {name: 'address_addition', field: 'address_addition', label: 'Adresszusatz', sortable: true, align: 'left'},
      {name: 'street', field: 'street', label: 'Straße', sortable: true, align: 'left'},
      {name: 'house_number', field: 'house_number', label: 'Hausnummer', sortable: true, align: 'left'},
      {name: 'postal_code', field: 'postal_code', label: 'Postleitzahl', sortable: true, align: 'left'},
      {name: 'city', field: 'city', label: 'Ort', sortable: true, align: 'left'},
      {name: 'country', field: 'country', label: 'Land', sortable: true, align: 'left'},
      {name: 'action', field: '', label: 'Action', align: 'left'}
    ]">
  </BaseList>
</template>

<script>
import BaseList from 'components/base/List'
export default {
  components: {
    BaseList
  }
}
</script>
