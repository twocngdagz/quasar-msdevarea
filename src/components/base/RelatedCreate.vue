<script>
import { api } from 'boot/axios'
export default {
  name: "RelatedCreate",
  props: {
    endpoint: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    relatedKey: {
      type: String,
      required: true
    }    ,
  },
  data() {
    return {
      form: {}
    }
  },
  emits: ['success'],
  methods:{
    onSubmit() {
      this.form[this.relatedKey] = this.id
      api.post(
        this.endpoint,
        this.form
      ).then(response => {
        this.$emit('success')
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  render() {
    return this.$slots.default({
      onSubmit: this.onSubmit,
      form: this.form
    })
  }
}
</script>
