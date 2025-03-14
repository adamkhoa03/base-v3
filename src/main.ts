import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import VueTablerIcons from 'vue-tabler-icons';
import VueApexCharts from 'vue3-apexcharts';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import i18n from '@/i18n';

// google-fonts
import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/600.css';
import '@fontsource/public-sans/700.css';

//Mock Api data
import { fakeBackend } from '@/utils/helpers/fake-backend';

// Auto import and make global components
import './plugins/base';
import registerGlobalComponents from '@/plugins/base.ts';

const app = createApp(App);
registerGlobalComponents(app);
fakeBackend();
app.use(router);
app.use(i18n);
app.use(PerfectScrollbarPlugin);
app.use(createPinia());
app.use(VueTablerIcons);
app.use(Antd);
app.use(VueApexCharts);
app.use(vuetify).mount('#app');
