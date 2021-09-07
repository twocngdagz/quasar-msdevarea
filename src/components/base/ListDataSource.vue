<script>
import { h } from 'vue'
import { api } from 'boot/axios'
export default {
  name: 'BaseListDataSource',
  props: {
    endpoint: {
      type: String,
      required: true,
    },
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      items: [],
      meta: {},
      loading: false
    }
  },
  methods: {
    fetch() {
      this.loading = true
      api.get(this.endpoint, this.config)
        .then(response => {
          this.items = response.data.data
          this.meta = response.data.meta
          this.loading = false
        })
        .catch(error => {
          console.log(error)
        })

    }
  },
  created() {
    this.fetch()
  },
  render() {
    return this.$slots.default({
      items: this.items,
      meta: this.meta,
      loading: this.loading
    })
  }
}
</script>
