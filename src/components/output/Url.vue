<template>
  <div class="row">
    <dt class="col-sm-3">{{ field.label }}</dt>
    <dd class="col-sm-9"><ValueUrl :value="item[field.key]"></ValueUrl></dd>
  </div>
</template>

<script>
import ValueUrl from 'components/value/Url'
export default {
  name: "OutputUrl",
  components: {
    ValueUrl
  },
  props: {
    field: {required: true, type: Object},
    item: {required: true, type: Object}
  }
}
</script>
