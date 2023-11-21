import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
//import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
// import './style.css'
import App from  './App.vue'

createApp(App).use(PrimeVue).mount('#app')
// createApp(App).mount('#app')
