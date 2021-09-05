<template>
  <div>
    <span v-if="labeled" class="label">{{ field.label }}</span>
    <component
      :is="componentType"
      :value="item[fieldKey]"
    ></component>
  </div>
</template>

<script>
import ValueEmail from 'components/value/Email'
import ValuePhone from 'components/value/Phone'
import ValueText from 'components/value/Text'
import ValueUrl from 'components/value/Url'
import ValueTeam from 'components/value/Team'
export default {
  name: "TableField",
  components: {
    ValueEmail,
    ValuePhone,
    ValueText,
    ValueUrl,
    ValueTeam
  },
  props: {
    item: {
      required: true,
      type: Object
    },
    field: {
      required: true,
      type: Object
    },
    labeled: {
      default: false,
      type: Boolean
    },
    fieldKey: {
      type: String
    }
  },
  computed: {
    localField() {
      return {
        field: this.fieldKey,
        ...this.field
      }
    },
    componentType() {
      let mapping = {
        email: 'ValueEmail',
        team: 'ValueTeam',
        phone: 'ValuePhone',
        color: 'ValueColor',
        url: 'ValueUrl',
        default: 'ValueText'
      }
      let type = this.field.type ?? '';
      return (mapping[type.toLowerCase()] || mapping.default);
    }
  }
}
</script>

