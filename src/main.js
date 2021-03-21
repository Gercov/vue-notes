import { createApp } from 'vue'
import { ElMessage } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)


app.use(ElMessage)

app.mount('#app')