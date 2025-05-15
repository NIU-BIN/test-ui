import { defineComponent, h } from 'vue'
import Loading from './loading.vue'

const TLoadingComponent = defineComponent({
  name: 'TLoading',
  setup(props, { slots }) {
    return () => {
      const loading = h(Loading, { ...props }, slots)
      return loading
    }
  }
})

export default TLoadingComponent