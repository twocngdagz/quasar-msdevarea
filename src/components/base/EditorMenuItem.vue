<template>
  <q-btn
    :color="{ 'primary': isActive ? isActive() : 'black' }"
    icon="timeline"
    @click="action"
    :icon="icon"
    :title="title"
  />
</template>

<script>
export default {
  name: "EditorMenuItem",
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    action: {
      type: Function,
      required: true
    },
    isActive: {
      type: Function,
      default: null
    }
  }
}
</script>
