<template>
  <a
    :href = "href"
    :class = "{active:isActive}"
    @click = "go"
      >
      <slot></slot>
  </a>    
</template>

<script>
import routes from '../routes'
export default {
  props:{
      href:{
          type:String,
          require:true
      }
  },
  computed:{
      isActive(){
         return this.href === this.$root.currentRoute
      }
  },
  methods:{
      go(event){
          event.preventDefault()
          this.$root.currentRoute = this.href
          window.history.pushState(
              null,
              routes[this.href],
              this.href

          )
      }
  }
}
</script>

<style>
    .active{
        color: cornflowerblue;
    }
</style>


