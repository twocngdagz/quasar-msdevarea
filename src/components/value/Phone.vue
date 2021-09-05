<template>
<span v-if="value!==''">
  <a :href="'tel:'+value">{{ value }}</a>
</span>
</template>

<script>
export default {
  name: "ValuePhone",
  props: {
    value: {
      type:String
    }
  }
}
</script>
