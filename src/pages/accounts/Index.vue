<template>
  <q-page class="row">
    <BaseList2
      apiEndpoint="accounts"
      :fields="{
        name: {
          label: 'Name'
        },
        name_affix: {
          label: 'Nameszusatz'
        },
        phone: {
          label: 'Telefon',
          type: 'Phone'
        },
        fax: {
          label: 'Fax'
        },
        mobile: {
          label: 'Mobil',
          type: 'Phone'
        },
        email: {
          label: 'E-Mail',
          type: 'Email'
        },
        url: {
          label: 'Web',
          type: 'Url'
        },
        team_id: {
          label: 'Team',
          type: 'Team'
        }
      }"
      :columns="[
       {
          label: '',
          type: 'Action',
          action: 'Show'
        },
        {
          label: 'Name',
          type: 'Fields',
          fields: [
            {key: 'name', labeled:false},
            {key: 'name_affix', labeled:false}
          ],
          sortField: 'name'
        },
        {
          label: 'Telefon',
          type: 'Fields',
          fields: [
            {key:'phone'},
            {key:'fax'},
            {key:'mobile'},
          ]
        }, {
          label: 'Team + E-Mail',
          type: 'Fields',
          fields: [
            {key:'team_id', labeled:false},
            {key:'email', labeled:false},
          ],
          sortField: 'email'
        },
         {
          field: 'email',
          sortField: 'email'
        },
        {
          field: 'url',
          sortField: 'url'
        },
        {
          field: 'team_id',
          sortField: 'team_id'
        },
        {
          label: '',
          type: 'Action',
          action: 'Action'
        }
      ]"
    ></BaseList2>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import BaseList2 from 'components/base/List2.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    BaseList2
  }
})
</script>
