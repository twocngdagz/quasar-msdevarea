<template>
  <q-page padding>
    <BaseUpdate apiEndpoint="accounts" :itemId="Number.parseInt($route.params.id)" :form="form" @data-loaded="dataLoaded">
      <InputGrid :grids="grids" v-model="form"></InputGrid>
    </BaseUpdate>
  </q-page>
</template>

<script>
import BaseUpdate from 'components/base/Update'
import InputGrid from 'components/input/Grid'
export default {
  components: {
    BaseUpdate,
    InputGrid
  },
  data() {
    return {
      form: {},
      grids: [
        {
          width: 6,
          fieldsets: [
            {
              title: 'Firmierung',
              fields: [
                {
                  key: 'name',
                  label: 'Name',
                  type: 'InputText',
                  rules: {
                    min: 3,
                    required: true
                  }
                },
                {
                  key: 'name_affix',
                  label: 'Namenszusatz',
                  type: 'InputTextarea',
                  rules: {}
                },
                {
                  key: 'team_id',
                  label: 'Team',
                  type: 'InputTeam',
                  rules: {},
                  optionLabel:"name"
                }
              ]
            }
          ]
        },
        {
          width: 6,
          fieldsets: [
            {
              title: 'Kommunikation',
              fields: [
                {
                  key: 'phone',
                  label: 'Telefon',
                  type: 'InputText',
                  rules: {}
                },
                {
                  key: 'fax',
                  label: 'Fax',
                  type: 'InputText',
                  rules: {}
                },
                {
                  key: 'mobile',
                  label: 'Mobil',
                  type: 'InputText',
                  rules: {}
                },
                {
                  key: 'email',
                  label: 'E-Mail',
                  type: 'InputText',
                  rules: {}
                },
                {
                  key: 'url',
                  label: 'Web',
                  type: 'InputText',
                  rules: {}
                }
              ]
            }
          ]
        }
      ],
    }
  },
  methods: {
    dataLoaded(formData) {
      this.form = formData
    }
  }
}
</script>
