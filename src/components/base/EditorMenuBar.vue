<template>
  <div>
    <q-button-group class="mx-1" size="sm">
      <BaseEditorMenuItem v-for="(toolbar, index) in toolbars" :key="index" v-bind="toolbar"></BaseEditorMenuItem>
    </q-button-group>
  </div>
</template>

<script>
import EditorMenuItem from "components/base/EditorMenuItem";
export default {
  name: "EditorMenuBar",
  components: {
    EditorMenuItem,
  },
  props: {
    editor: {
      type: Object,
      required: true
    },
    toolbars: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
