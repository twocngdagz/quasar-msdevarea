<template>
  <div>
    <BaseShow apiEndpoint="accounts" :itemId="Number.parseInt($route.params.id)" :item="item" @data-loaded="dataLoaded">
      <OutputGrid :item="item" :grids="grids"></OutputGrid>
      <OutputFieldset :item="item" :fields="fields" title="Kunde"></OutputFieldset>

      <BaseRelatedList
        :tableFields="[
            {key: 'show', label: ''},
            {key: 'street', label: 'Straße', sortable: true},
            {key: 'postal_code', label: 'Postleitzahl', sortable: true},
            {key: 'city', label: 'Ort', sortable: true},
            {key: 'country', label: 'Land', sortable: true},
            {key: 'action', label: 'Action'}
            ]"
        :showFields="[
          { key: 'address_addition',label: 'Adresszusatz'},
          { key: 'street', label: 'Straße'},
          { key: 'house_number', label: 'Hausnummer'},
          { key: 'postal_code', label: 'Postleitzahl'},
          { key: 'city', label: 'Ort'},
          { key: 'country', label: 'Land'}]"
        :addFields="[
          { key: 'address_addition', label: 'Adresszusatz', type: 'InputText'},
          { key: 'street', label: 'Straße', type: 'InputText'},
          { key: 'house_number', label: 'Hausnummer', type: 'InputText'},
          { key: 'postal_code', label: 'Postleitzahl', type: 'InputText'},
          { key: 'city', label: 'Ort', type: 'InputText', },
          { key: 'country', label: 'Land', type: 'InputText'}]"
        :updateFields="[
          { key: 'address_addition', label: 'Adresszusatz', type: 'InputText', rules: {required: true}},
          { key: 'street', label: 'Straße', type: 'InputText'},
          { key: 'house_number', label: 'Hausnummer', type: 'InputText'},
          { key: 'postal_code', label: 'Postleitzahl', type: 'InputText'},
          { key: 'city', label: 'Ort', type: 'InputText', },
          { key: 'country', label: 'Land', type: 'InputText'}
        ]"
        api-endpoint="addresses"
        related-key="account_id"
        :related-value="Number.parseInt($route.params.id)"
      ></BaseRelatedList>
    </BaseShow>
  </div>
</template>


<script>
import BaseShow from 'components/base/Show'
import OutputGrid from 'components/output/Grid'
import OutputFieldset from 'components/output/Fieldset'
import BaseRelatedList from 'components/base/RelatedList'
export default {
  name: "index.vue",
  components: {
    BaseShow,
    OutputGrid,
    OutputFieldset,
    BaseRelatedList
  },
  data() {
    return {
      item: {},
      grids: [
        {
          fieldsets: [
            {
              title: 'Firmierung',
              fields: [
                {key: 'name', label: 'Name'},
                {key: 'name_affix', label: 'Nameszusatz'},
              ]
            },
            {
              title: 'Noch mehr Namen',
              fields: [
                {key: 'name', label: 'Name'},
                {key: 'name_affix', label: 'Nameszusatz'},
              ]
            },
            {
              title: 'Team',
              fields: [
                {key: 'team_id', label: 'Team', type: 'team'},
              ]
            }
          ]
        },
        {
          fieldsets: [
            {
              title: 'Kommunikation',
              fields: [
                {key: 'phone', label: 'Telefon', type: 'tel'},
                {key: 'fax', label: 'Fax'},
                {key: 'mobile', label: 'Mobil', type: 'tel'},
                {key: 'email', label: 'Email', type: 'email'},
                {key: 'url', label: 'Web', type: 'url'},
              ]
            }
          ]

        }
      ],
      fields: [
        {key: 'name', label: 'Name'},
        {key: 'name_affix', label: 'Nameszusatz'},
        {key: 'phone', label: 'Telefon', type: 'tel'},
        {key: 'fax', label: 'Fax'},
        {key: 'mobile', label: 'Mobil', type: 'tel'},
        {key: 'email', label: 'Email', type: 'email'},
        {key: 'url', label: 'Web', type: 'url'},
      ],

    }
  },
  methods: {
    dataLoaded(item) {
      this.item = item

    }
  },
}
</script>
