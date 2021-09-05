<template>
  <div class="row">
    <dt class="col-sm-3">{{ field.label }}</dt>
    <dd class="col-sm-9">{{ item[field.key] }}</dd>
  </div>
</template>

<script>
export default {
  name: "OutputText",
  props: {
    field: {required: true, type: Object},
    item: {required: true, type: Object}
  }
}
</script>
