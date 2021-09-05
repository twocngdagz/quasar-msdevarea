<template>
<span v-if="value!==''">
  <a :href="'mailto:'+value">{{ value }}</a>
</span>
</template>

<script>
export default {
  name: "ValueEmail",
  props: {
    value: {
      type:String
    }
  }
}
</script>
