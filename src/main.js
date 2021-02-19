import { createApp, defineComponent } from 'vue';
import { ConsoleMixin } from './mixins';
import App from './App.vue';
import store from './store';

import HelloWorld from './components/HelloWorld.vue';

const HelloWorldCom = defineComponent(HelloWorld);

HelloWorldCom.mixins.push(ConsoleMixin);

// console.log('HelloWorldCom:', HelloWorldCom, createApp(HelloWorldCom).mount('#test'));

const app = createApp(App);

app.use(store);
// .component('hello-world', HelloWorldCom)
app.mount('#app');
