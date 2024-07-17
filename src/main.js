import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {createApp} from 'vue'
import App from './app.vue'
import router from './router/router.js'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)

app.use(router)
// 用来处理路由跳转后页面滚动到顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

app.mount('#app')
