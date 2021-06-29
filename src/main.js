import Vue from 'vue'
import App from '@/App';//@是一个别名,是一个小名,代表的就是我们的src路径

Vue.config.productionTip=false;//关闭生产提示

new Vue({
    el:'#app',
    render:h=>h(App)
})