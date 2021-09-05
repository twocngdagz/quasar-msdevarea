<template>
  <div class="row">
    <dt class="col-sm-3">{{ field.label }}</dt>
    <dd class="col-sm-9"><ValueColor :value="item[field.key]"></ValueColor></dd>
  </div>
</template>

<script>
export default {
  name: "OutputColor",
  props: {
    field: {required: true, type: Object},
    item: {required: true, type: Object}
  }
}
</script>
