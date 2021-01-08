<template>
  <div v-simple-scroll-trigger="{ start, end, toggleClass, onEnter, onLeave }"></div>
</template>

<script>

  export default {
    name: 'v-simple-scroll-trigger',
    props: {
      start: {
        type: String,
        default: 'top 90%'
      },
      end: {
        type: String,
        default: 'top 20%'
      },
      toggleClass: {
        type: String,
        default: null
      },
      onEnter: {
        type: Function,
        default: null
      },
      onLeave: {
        type: Function,
        default: null
      }
    }
  }
</script>
