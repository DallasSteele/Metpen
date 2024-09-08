export const IncAdminfooter = () => import('../..\\components\\inc\\adminfooter.vue' /* webpackChunkName: "components/inc-adminfooter" */).then(c => wrapFunctional(c.default || c))
export const IncAdminheader = () => import('../..\\components\\inc\\adminheader.vue' /* webpackChunkName: "components/inc-adminheader" */).then(c => wrapFunctional(c.default || c))
export const IncAppFooter = () => import('../..\\components\\inc\\AppFooter.vue' /* webpackChunkName: "components/inc-app-footer" */).then(c => wrapFunctional(c.default || c))
export const IncAppHeader = () => import('../..\\components\\inc\\AppHeader.vue' /* webpackChunkName: "components/inc-app-header" */).then(c => wrapFunctional(c.default || c))
export const IncAuthheader = () => import('../..\\components\\inc\\Authheader.vue' /* webpackChunkName: "components/inc-authheader" */).then(c => wrapFunctional(c.default || c))
export const IncHome = () => import('../..\\components\\inc\\Home.vue' /* webpackChunkName: "components/inc-home" */).then(c => wrapFunctional(c.default || c))
export const IncLoadingmf = () => import('../..\\components\\inc\\Loadingmf.vue' /* webpackChunkName: "components/inc-loadingmf" */).then(c => wrapFunctional(c.default || c))
export const IncMitrafooter = () => import('../..\\components\\inc\\mitrafooter.vue' /* webpackChunkName: "components/inc-mitrafooter" */).then(c => wrapFunctional(c.default || c))
export const IncMitraheader = () => import('../..\\components\\inc\\mitraheader.vue' /* webpackChunkName: "components/inc-mitraheader" */).then(c => wrapFunctional(c.default || c))
export const IncServiceCard = () => import('../..\\components\\inc\\ServiceCard.vue' /* webpackChunkName: "components/inc-service-card" */).then(c => wrapFunctional(c.default || c))
export const IncSidebar = () => import('../..\\components\\inc\\Sidebar.vue' /* webpackChunkName: "components/inc-sidebar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
