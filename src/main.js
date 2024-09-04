globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import page from "https://unpkg.com/page/page.mjs";
import App from "./app";

console.log("main");

const createPageHandler = (createScope) => () => {
  console.log("createScope", createScope);
};

page({ window });

page("/", createPageHandler("Home"));
page("/user", createPageHandler("User"));

page();

const app = createApp(App)
app.provide('page',page)
app.mount("#app");
