<template>
  <div class="row">
    <dt class="col-sm-3">{{ field.label }}</dt>
    <dd class="col-sm-9"><ValueTeam :value="item[field.key]"></ValueTeam></dd>
  </div>
</template>

<script>
import ValueTeam from 'components/value/Team'
export default {
  name: "OutputTeam",
  components: {
    ValueTeam
  },
  props: {
    field: {required: true, type: Object},
    item: {required: true, type: Object}
  }
}
</script>
