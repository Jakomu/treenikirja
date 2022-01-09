import { createApp } from "vue";

import App from "./App.vue";
import store from "./store.js";
import router from "./router.js";
import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);

app.mount("#app");
