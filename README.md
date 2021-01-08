<h1 align="center">Vue Simple Scroll Trigger</h1>
<p align="center">Vue.js plugin for <a href="https://greensock.com/scrolltrigger/">GSAP Scroll Trigger</a></p>

## What are we talking about

We are talking about a Vue component and directive that make Scroll Trigger easy to use without leaving the template section.
## How to install

```
npm install vue-simple-scroll-trigger
```

## How to use

```js
import App from './App.vue';
import VSimpleScrollTrigger from 'vue-simple-scroll-trigger';
import Vue from 'vue';

Vue.use(VSimpleScrollTrigger);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

or without plugin initialization... 

```vue
<template>
  <v-simple-scroll-trigger/>
</template>

<script>
import { VSimpleScrollTrigger } from 'vue-simple-scroll-trigger';

export default { 
  component: {
    VSimpleScrollTrigger
  }
}
</script>
```

or using the directive 

```vue
<template>
  <div v-simple-scroll-trigger="{ start, end, toggleClass, onEnter, onLeave }"></div>
</template>
```


### Props
Since this component is simply a wrapper of Scroll Trigger i would suggest you to take a look at the official documentation (https://greensock.com/docs/v3/Plugins/ScrollTrigger) by gsap 


- ### start
  -  type: `String`, 
  -  default: `top 90%`
- ### end
  -  type: `String`, 
  -  default: `top 20%`
- ### toggleClass
  -  type: `String`, 
  -  default: `null`
- ### onEnter <h6>for both originals 'onEnter' 'onEnterBack' callbacks </h6>
  -  type: `Function`, 
  -  default: `null`
- ### onLeave <h6>for both originals 'onLeave' 'onLeaveBack' callbacks </h6>
  -  type: `Function`, 
  -  default: `null`
  
 
## License

MIT @ Davide Turrini [(davide-turrini)](https://github.com/davide-turrini)

(Please note: This is my second try to publish something on npm! Any kind of feedback or contribution is more than welcome)
