export default defineAppConfig({
  ui: {
    button: {
      defaultVariants: {
        color: 'neutral',
        variant: 'outline',
        size: 'md'
      }
    },
    badge: {
      defaultVariants: {
        color: 'primary',
        variant: 'subtle'
      }
    },
    icons: {
      loading: 'i-lucide-loader-circle',
      chevronDown: 'i-lucide-chevron-down',
      check: 'i-lucide-check',
      close: 'i-lucide-x'
    }
  }
})