import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.config({
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
})

export default {
  inserted: function (el, binding, vnode) {

    ScrollTrigger.create({
      trigger: (binding.value.trigger !== undefined) ? binding.value.trigger : el,
      endTrigger: binding.value.endTrigger,
      // markers: true,
      start: (binding.value.start !== undefined) ? binding.value.start : 'top 90%',
      end: (binding.value.end !== undefined) ? binding.value.end : 'top 20%',
      toggleClass: binding.value.toggleClass,
      scroller: (binding.value.scroller !== undefined)? binding.value.scroller : document.body,
      onToggle: ({ isActive }) => {
        if (isActive && binding.value.onEnter !== undefined && typeof binding.value.onEnter === 'function') {
          binding.value.onEnter()
        }
        if (!isActive && binding.value.onLeave !== undefined && typeof binding.value.onLeave === 'function') {
          binding.value.onLeave()
        }
      }
    })
  }
}
