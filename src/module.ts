import { defineNuxtModule, createResolver, extendPages, extendRouteRules, addServerScanDir } from '@nuxt/kit'
import type { ModuleOptions } from 'nuxt/schema';

// Module options TypeScript interface definition
// export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-healthz',
    configKey: 'healthz',
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '>=3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    // const resolver = createResolver(import.meta.url)

    // // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve('./runtime/plugin'));

    const { resolve } = createResolver(import.meta.url);

    extendPages((pages) => {
      pages.unshift({
        name: 'home',
        path: '/',
        file: resolve('./runtime/pages/index.vue')
       });
    });

    extendRouteRules(
      // '/preview/**',
      '/**',
      {
        // Cache-control is an HTTP header used to specify browser caching policies in both client requests and server responses
        // https://www.imperva.com/learn/performance/cache-control/#:~:text=CDN%20Guide-,What%20is%20the%20Cache%2DControl%20Header,i.e.%2C%20time%20to%20live).
        swr: 0 // 600 seconds; 0 = disabled or not set
        // cache: { swr: true, maxAge: 600 }
      }

      // {
      // redirect: {
      //   to: '/preview-new',
      //   statusCode: 302
      // }
    );

    // addServerHandler({
    //   route: '/healthcheck',
    //   handler: resolve('./runtime/server/routes/healthcheck'),
    // })

    addServerScanDir(resolve('./runtime/server'));

     // Transpile runtime
    //  const runtimeDir = resolve('./runtime');
    //  addImportsDir(runtimeDir);
    //  addComponent();
 
     // Add plugin to load user before bootstrap
    //  addPlugin(resolve(runtimeDir, 'plugins', 'strapi'))
  },
})
