import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.less'

import {createApp} from 'vue'
import App from './app.vue'
import router from './router/router.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

app.mount('#app')
