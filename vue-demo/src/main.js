import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import rmonitor from "@rmonitor/core/src";
import recordscreen from '@rmonitor/recordscreen'

const app = createApp(App);

app.use(ElementPlus);
app.use(rmonitor, {
  dsn: "http://localhost:8080/reportData",
  apikey: "abcd",
  disable: true,
});
// rmonitor.use(performance);
rmonitor.use(recordscreen, { recordScreentime: 15 });

app.mount("#app");
