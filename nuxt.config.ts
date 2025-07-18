// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/content"],
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4,
    },
    content: {
        preview: {
            api: "https://api.nuxt.studio",
        },
    },
    compatibilityDate: "2024-04-03",
});
