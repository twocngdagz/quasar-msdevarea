<template>
<span v-if="value!==''">
  <a target="_blank" :href="+value">{{ value }}</a>
</span>
</template>

<script>
export default {
  name: "ValueUrl",
  props: {
    value: {
      type:String
    }
  }
}
</script>
