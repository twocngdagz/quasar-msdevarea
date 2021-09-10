<template>
  <q-page padding>
    <BaseCreate apiEndpoint="accounts" :form="form">
      <q-input label="Name" field="name" v-model="form.name"></q-input>
      <q-input label="Namenszusatz" field="name_affix" v-model="form.name_affix"></q-input>
      <q-input label="Telefon" field="phone" type="tel" v-model="form.phone"></q-input>
      <q-input label="Mobil" field="mobile" type="tel" v-model="form.mobile"></q-input>
      <q-input label="E-Mail" field="email" type="email" v-model="form.email"></q-input>
      <q-input label="Web" field="url" type="url" v-model="form.url"></q-input>
    </BaseCreate>
  </q-page>
</template>

<script>
import BaseCreate from 'components/base/Create'
export default {
  components: {
    BaseCreate
  },
  data() {
    return {
      form: {}
    }
  }
}
</script>
