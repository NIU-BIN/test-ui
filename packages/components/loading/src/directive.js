import TLoadingComponent from './loading.vue'
import { h, render } from 'vue'

const createLoading = (el) => {
  el.style.position = 'relative';
  const vnode = h(TLoadingComponent, {
    text: el.getAttribute('loading-text'),
    background: el.getAttribute('loading-background')
  })
  render(vnode, el)
}

const vLoading = {
  mounted(el, binding) {
    const value = binding.value;
    if (value) createLoading(el);
  },
  updated(el, binding) {
    if (!binding.value && binding.value !== binding.oldValue) {
      el.removeChild(el.querySelector('.t-loading'))
      render(null, el)
    } else if (binding.value && binding.value !== binding.oldValue) {
      createLoading(el);
    }
  },
  unmounted(el) {
    el.removeChild(el.querySelector('.t-loading'))
    render(null, el)
  }
}

export const createGlobalLoading = ({ text, background }) => {
  let vnode = h(TLoadingComponent, {
    text,
    loadingBackground: background,
    screen: true
  })
  window.document.body.classList.add('t-loading-screen-parent')
  // window.document.body.style.overflow = 'hidden'
  render(vnode, window.document.body)
  return {
    close() {
      window.document.body.classList.remove('t-loading-screen-parent')
      window.document.body.removeChild(vnode.el)
      render(null, window.document.body) // 该代码作用是清除vnode
      vnode = null
    }
  }
}

export default vLoading