import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    const { QuillEditor } = await import("@vueup/vue-quill");
    await import("@vueup/vue-quill/dist/vue-quill.snow.css");
    nuxtApp.vueApp.component("QuillEditor", QuillEditor);
  }
});
