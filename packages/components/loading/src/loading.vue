<template>
  <div
    :class="['t-loading', { 't-loading-mask--screen': screen }]"
    :style="{
      'background-color': background,
    }"
  >
    <div class="t-loading__spinner">
      <div class="t-loading__spinner-icon" v-if="!icon">
        <svg width="60" height="30" viewBox="0 0 100 50">
          <circle cx="25" cy="25" r="10" fill="#5e72e4">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="50" cy="25" r="10" fill="#5e72e4">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="75" cy="25" r="10" fill="#5e72e4">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              begin="0.5s"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
      <div v-else v-html="icon"></div>
      <div class="t-loading__text" v-if="text">{{ text }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  background: {
    type: String,
  },
  screen: {
    type: Boolean,
  },
  icon: {
    type: String,
  },
});
</script>
