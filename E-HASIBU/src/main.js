import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCamera, faPlus, faUser,faHouseUser} from '@fortawesome/free-solid-svg-icons' 


library.add(faPlus,faUser, faCamera,faHouseUser);





const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)


app.mount('#app')
