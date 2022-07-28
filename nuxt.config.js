export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: "cantra",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com"},
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;1,100;1,400&display=swap"}      ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // server: {
  //   host: "0.0.0.0",
  // },
  
  css: [
    "@/assets/css/style.css",
    "@/assets/css/stylesheet.css",
    "@/assets/css/bootstrap.css",
    "@/assets/css/reset.css",
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-agile", ssr: false, mode: "client" },
    { src: "@/plugins/vue-swiper", ssr: false },
    { src: "@/plugins/vue-pictures", ssr: false },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  target: "static",
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      // 'vue-upload-drop-images'
    ],
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },
};
