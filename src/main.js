import { createApp } from "vue";
import router from "./routes/index";
import "./style.css";
import App from "./App.vue";
import "bootstrap";

createApp(App).use(router).mount("#app");
