<template>
  <section>
    <h1 v-if="title">{{ title }}</h1>
    <dl>
      <component
        v-for="field in computedFields"
        :key="field.key"
        :is="field.componentType"
        :field="field"
        :item="item"
      >
      </component>
      <div class="hr"></div>
    </dl>
  </section>
</template>

<script>
import OutputColor from 'components/output/Color'
import OutputEmail from 'components/output/Email'
import OutputPhone from 'components/output/Phone'
import OutputTeam from 'components/output/Team'
import OutputText from 'components/output/Text'
import OutputUrl from 'components/output/Url'
export default {
  name: "OutputFieldset",
  components: {
    OutputColor,
    OutputEmail,
    OutputPhone,
    OutputTeam,
    OutputText,
  },
  props: {
    item: {type: Object, required: true},
    fields: {type: Array, required: true},
    title: {type: String}
  },
  computed: {
    computedFields() {
      return this.fields.map((field) =>  {
        let mapping = {
          email: 'OutputEmail',
          team: 'OutputTeam',
          phone: 'OutputPhone',
          color: 'OutputColor',
          url: 'OutputUrl',
          default: 'OutputText'
        }
        let type = field.type ?? '';
        field.componentType = (mapping[type.toLowerCase()] || mapping.default);
        return field;
      })
    }
  }
}
</script>
