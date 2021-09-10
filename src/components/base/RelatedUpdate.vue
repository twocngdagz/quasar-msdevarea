<script>
import { api } from 'boot/axios'
export default {
  name: "RelatedUpdate",
  props: {
    endpoint: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      form: {}
    }
  },
  computed: {
    apiUrl() {
      return `${this.endpoint}/${this.id}`
    }
  },
  emits: ['success'],
  methods:{
    onSubmit() {
      api.put(
        this.apiUrl,
        this.form
      ).then(response => {
        this.$emit('success')
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    api.get(
      this.apiUrl
    )
      .then(response => {
        this.form = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  render() {
    return this.$slots.default({
      onSubmit: this.onSubmit,
      form: this.form
    })
  }
}
</script>
