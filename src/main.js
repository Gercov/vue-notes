import { createApp } from 'vue'
import { ElMessage } from 'element-plus';
import App from "./App.vue";

const app = createApp(App)
app.use(ElMessage)

app.mount('#app')