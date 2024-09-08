import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6cf03eb3 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _9854e62c = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _174f9b74 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _06e398ba = () => interopDefault(import('..\\pages\\history.vue' /* webpackChunkName: "pages/history" */))
const _15ab61fa = () => interopDefault(import('..\\pages\\orderpage.vue' /* webpackChunkName: "pages/orderpage" */))
const _31e99a7d = () => interopDefault(import('..\\pages\\profile-page.vue' /* webpackChunkName: "pages/profile-page" */))
const _63a46a28 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _b8e09fd6 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _17cf1d6a = () => interopDefault(import('..\\pages\\admin\\admin.vue' /* webpackChunkName: "pages/admin/admin" */))
const _cdf4ab04 = () => interopDefault(import('..\\pages\\admin\\mitra-management.vue' /* webpackChunkName: "pages/admin/mitra-management" */))
const _a6133fea = () => interopDefault(import('..\\pages\\admin\\platform-performance.vue' /* webpackChunkName: "pages/admin/platform-performance" */))
const _468f0ef7 = () => interopDefault(import('..\\pages\\admin\\Support-Requests.vue' /* webpackChunkName: "pages/admin/Support-Requests" */))
const _072eedec = () => interopDefault(import('..\\pages\\admin\\transactions.vue' /* webpackChunkName: "pages/admin/transactions" */))
const _1dd86b7a = () => interopDefault(import('..\\pages\\admin\\usermanagement.vue' /* webpackChunkName: "pages/admin/usermanagement" */))
const _cd9db032 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _4d647bec = () => interopDefault(import('..\\pages\\auth\\signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _36613c88 = () => interopDefault(import('..\\pages\\carpet-laundry\\carpet-page.vue' /* webpackChunkName: "pages/carpet-laundry/carpet-page" */))
const _70f539e4 = () => interopDefault(import('..\\pages\\carpet-laundry\\peru1.vue' /* webpackChunkName: "pages/carpet-laundry/peru1" */))
const _71035165 = () => interopDefault(import('..\\pages\\carpet-laundry\\peru2.vue' /* webpackChunkName: "pages/carpet-laundry/peru2" */))
const _711168e6 = () => interopDefault(import('..\\pages\\carpet-laundry\\peru3.vue' /* webpackChunkName: "pages/carpet-laundry/peru3" */))
const _0dd1a128 = () => interopDefault(import('..\\pages\\home-clean\\home-page.vue' /* webpackChunkName: "pages/home-clean/home-page" */))
const _048214a7 = () => interopDefault(import('..\\pages\\home-clean\\peru4.vue' /* webpackChunkName: "pages/home-clean/peru4" */))
const _04902c28 = () => interopDefault(import('..\\pages\\home-clean\\peru5.vue' /* webpackChunkName: "pages/home-clean/peru5" */))
const _049e43a9 = () => interopDefault(import('..\\pages\\home-clean\\peru6.vue' /* webpackChunkName: "pages/home-clean/peru6" */))
const _735bb21e = () => interopDefault(import('..\\pages\\lavatory\\lavatory-page.vue' /* webpackChunkName: "pages/lavatory/lavatory-page" */))
const _b2c9897a = () => interopDefault(import('..\\pages\\lavatory\\peru7.vue' /* webpackChunkName: "pages/lavatory/peru7" */))
const _b2ad5a78 = () => interopDefault(import('..\\pages\\lavatory\\peru8.vue' /* webpackChunkName: "pages/lavatory/peru8" */))
const _b2912b76 = () => interopDefault(import('..\\pages\\lavatory\\peru9.vue' /* webpackChunkName: "pages/lavatory/peru9" */))
const _29b79eb9 = () => interopDefault(import('..\\pages\\pool-clean\\peru10.vue' /* webpackChunkName: "pages/pool-clean/peru10" */))
const _29c5b63a = () => interopDefault(import('..\\pages\\pool-clean\\peru11.vue' /* webpackChunkName: "pages/pool-clean/peru11" */))
const _29d3cdbb = () => interopDefault(import('..\\pages\\pool-clean\\peru12.vue' /* webpackChunkName: "pages/pool-clean/peru12" */))
const _8579f124 = () => interopDefault(import('..\\pages\\pool-clean\\pool-page.vue' /* webpackChunkName: "pages/pool-clean/pool-page" */))
const _3313b806 = () => interopDefault(import('..\\pages\\vendor\\createlistings.vue' /* webpackChunkName: "pages/vendor/createlistings" */))
const _d7a55842 = () => interopDefault(import('..\\pages\\vendor\\detailprofil.vue' /* webpackChunkName: "pages/vendor/detailprofil" */))
const _1deb381c = () => interopDefault(import('..\\pages\\vendor\\manageorders.vue' /* webpackChunkName: "pages/vendor/manageorders" */))
const _0abd40e5 = () => interopDefault(import('..\\pages\\vendor\\mitra.vue' /* webpackChunkName: "pages/vendor/mitra" */))
const _de1efb94 = () => interopDefault(import('..\\pages\\vendor\\setpricing.vue' /* webpackChunkName: "pages/vendor/setpricing" */))
const _e6afcd10 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6cf03eb3,
    name: "about"
  }, {
    path: "/cart",
    component: _9854e62c,
    name: "cart"
  }, {
    path: "/contact",
    component: _174f9b74,
    name: "contact"
  }, {
    path: "/history",
    component: _06e398ba,
    name: "history"
  }, {
    path: "/orderpage",
    component: _15ab61fa,
    name: "orderpage"
  }, {
    path: "/profile-page",
    component: _31e99a7d,
    name: "profile-page"
  }, {
    path: "/services",
    component: _63a46a28,
    name: "services"
  }, {
    path: "/user",
    component: _b8e09fd6,
    name: "user"
  }, {
    path: "/admin/admin",
    component: _17cf1d6a,
    name: "admin-admin"
  }, {
    path: "/admin/mitra-management",
    component: _cdf4ab04,
    name: "admin-mitra-management"
  }, {
    path: "/admin/platform-performance",
    component: _a6133fea,
    name: "admin-platform-performance"
  }, {
    path: "/admin/Support-Requests",
    component: _468f0ef7,
    name: "admin-Support-Requests"
  }, {
    path: "/admin/transactions",
    component: _072eedec,
    name: "admin-transactions"
  }, {
    path: "/admin/usermanagement",
    component: _1dd86b7a,
    name: "admin-usermanagement"
  }, {
    path: "/auth/login",
    component: _cd9db032,
    name: "auth-login"
  }, {
    path: "/auth/signup",
    component: _4d647bec,
    name: "auth-signup"
  }, {
    path: "/carpet-laundry/carpet-page",
    component: _36613c88,
    name: "carpet-laundry-carpet-page"
  }, {
    path: "/carpet-laundry/peru1",
    component: _70f539e4,
    name: "carpet-laundry-peru1"
  }, {
    path: "/carpet-laundry/peru2",
    component: _71035165,
    name: "carpet-laundry-peru2"
  }, {
    path: "/carpet-laundry/peru3",
    component: _711168e6,
    name: "carpet-laundry-peru3"
  }, {
    path: "/home-clean/home-page",
    component: _0dd1a128,
    name: "home-clean-home-page"
  }, {
    path: "/home-clean/peru4",
    component: _048214a7,
    name: "home-clean-peru4"
  }, {
    path: "/home-clean/peru5",
    component: _04902c28,
    name: "home-clean-peru5"
  }, {
    path: "/home-clean/peru6",
    component: _049e43a9,
    name: "home-clean-peru6"
  }, {
    path: "/lavatory/lavatory-page",
    component: _735bb21e,
    name: "lavatory-lavatory-page"
  }, {
    path: "/lavatory/peru7",
    component: _b2c9897a,
    name: "lavatory-peru7"
  }, {
    path: "/lavatory/peru8",
    component: _b2ad5a78,
    name: "lavatory-peru8"
  }, {
    path: "/lavatory/peru9",
    component: _b2912b76,
    name: "lavatory-peru9"
  }, {
    path: "/pool-clean/peru10",
    component: _29b79eb9,
    name: "pool-clean-peru10"
  }, {
    path: "/pool-clean/peru11",
    component: _29c5b63a,
    name: "pool-clean-peru11"
  }, {
    path: "/pool-clean/peru12",
    component: _29d3cdbb,
    name: "pool-clean-peru12"
  }, {
    path: "/pool-clean/pool-page",
    component: _8579f124,
    name: "pool-clean-pool-page"
  }, {
    path: "/vendor/createlistings",
    component: _3313b806,
    name: "vendor-createlistings"
  }, {
    path: "/vendor/detailprofil",
    component: _d7a55842,
    name: "vendor-detailprofil"
  }, {
    path: "/vendor/manageorders",
    component: _1deb381c,
    name: "vendor-manageorders"
  }, {
    path: "/vendor/mitra",
    component: _0abd40e5,
    name: "vendor-mitra"
  }, {
    path: "/vendor/setpricing",
    component: _de1efb94,
    name: "vendor-setpricing"
  }, {
    path: "/",
    component: _e6afcd10,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
