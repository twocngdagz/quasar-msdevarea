<template>
  <div>
    <BaseShow apiEndpoint="accounts" :itemId="Number.parseInt($route.params.id)" :item="item" @data-loaded="dataLoaded">
      <OutputGrid :item="item" :grids="grids"></OutputGrid>
      <OutputFieldset :item="item" :fields="fields" title="Kunde"></OutputFieldset>

    </BaseShow>
  </div>
</template>


<script>
import BaseShow from 'components/base/Show'
import OutputGrid from 'components/output/Grid'
import OutputFieldset from 'components/output/Fieldset'
export default {
  name: "index.vue",
  components: {
    BaseShow,
    OutputGrid,
    OutputFieldset
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
