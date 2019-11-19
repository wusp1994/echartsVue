import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/css/reset.css'

import VueECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

import 'echarts/lib/**' //柱状图

// 按需引入 ECharts 各模块来减小打包体积
// import 'echarts/lib/chart/bar' //柱状图
// import 'echarts/lib/component/tooltip'//提示框

Vue.use(iView);

// 注册组件后即可使用
Vue.component('v-chart', VueECharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
