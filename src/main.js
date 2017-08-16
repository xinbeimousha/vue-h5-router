import Vue from 'vue'
import routes from './routes'

const app = new Vue({
   el:'#app',
   data:{
       currentRoute:window.location.pathname
   },
   computed:{
       Viewcomponent (){
            const matchingRoute = routes[this.currentRoute]

            return matchingRoute
                    ?require('./pages/' + matchingRoute + '.vue')
                    :require('./pages/404.vue')
       }
   },
   render(h) {
       return h(this.Viewcomponent)
   } 
})

window.addEventListener('popState',() =>{
    this.currentRoute = window.location.pathname
})