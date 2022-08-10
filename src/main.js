import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import store from '@/store';
import router from "@/router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

library.add(faBars, faTrash, faPlus)
app.component('font-awesome-icon', FontAwesomeIcon)

app
    .use(router)
    .use(store)
    .mount('#app');