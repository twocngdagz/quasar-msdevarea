<template>
  <b-button @click.prevent="execute()">{{action}}</b-button>
</template>

<script>
export default {
  name: "Action",
  props: {
    id: { required:true},
    to: { required:true, type: String},
    action: { required: true }
  },
  methods: {
    execute() {

    }
  }
}
</script>
