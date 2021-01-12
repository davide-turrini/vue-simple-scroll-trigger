<template>
  <div v-simple-scroll-trigger="{ start, end, onEnter, onLeave, scroller }"></div>
</template>

<script>

  import directive from './directive'

  export default {
    name: 'v-simple-scroll-trigger',
    directives: {
      'simple-scroll-trigger': directive
    },
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
      },
      scroller: {
        default: document.body
      }
    }
  }
</script>
