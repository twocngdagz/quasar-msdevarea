<template>
<span v-if="value!==''">
  {{ value }}
</span>
</template>

<script>
export default {
  name: "ValueText",
  props: {
    value: {
    }
  }
}
</script>
