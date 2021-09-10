<script>
import { api } from 'boot/axios'
export default {
  name: "RelatedView",
  props: {
    endpoint: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      item: null
    }
  },
  methods: {
    fetch() {
      api.get(`${this.endpoint}/${this.id}`)
        .then(response => {
          this.item = response.data
        })
    }
  },
  created() {
    this.fetch()
  },
  render() {
    return this.$slots.default({
      item: this.item
    })
  }
}
</script>
