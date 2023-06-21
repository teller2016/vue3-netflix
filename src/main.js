import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import initFirebaseConfig from "@/utils/firebaseConfig";

initFirebaseConfig();

createApp(App).use(router).mount("#app");
