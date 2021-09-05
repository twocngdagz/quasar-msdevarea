<template>
  <div class="row">
    <dt class="col-sm-3">{{ field.label }}</dt>
    <dd class="col-sm-9"><ValueEmail :value="item[field.key]"></ValueEmail></dd>
  </div>
</template>

<script>
import ValueEmail from 'components/value/Email'
export default {
  name: "OutputEmail",
  components: {
    ValueEmail
  },
  props: {
    field: {required: true, type: Object},
    item: {required: true, type: Object}
  }
}
</script>
