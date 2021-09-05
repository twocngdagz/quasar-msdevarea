<template>
  <div class="row">
    <dt class="col-sm-3">{{ field.label }}</dt>
    <dd class="col-sm-9"><ValuePhone :value="item[field.key]"></ValuePhone></dd>
  </div>
</template>

<script>
export default {
  name: "OutputPhone",
  props: {
    field: {required: true, type: Object},
    item: {required: true, type: Object}
  }
}
</script>
