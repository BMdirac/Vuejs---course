import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'

// Font Awesome CSS
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

// Bootstrap CSS, JS
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


createApp(App).use(router).mount('#app')
