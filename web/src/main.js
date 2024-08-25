import { createApp } from 'vue'
import App from './App.vue'
import { ExtractBaseUri } from './mixins/ExtractBaseUri';

const app = createApp(App);
app.mixin(ExtractBaseUri);
app.mount('#app');


