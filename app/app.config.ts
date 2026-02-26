export default defineAppConfig({
  ui: {
    primary: 'mocha',
    gray: 'zinc',
    button: {
      defaultVariants: {
        color: 'primary',
        size: 'lg',
      },
    },
    card: {
      slots: {
        root: 'rounded-xl',
      },
    },
    toast: {
      slots: {
        root: 'relative group overflow-hidden rounded-none border border-mocha-800/70 bg-[#1A1613] shadow-xl p-4 flex gap-3 focus:outline-none',
        title: 'text-xs uppercase tracking-widest text-mocha-200',
        description: 'text-sm text-mocha-300 leading-relaxed',
        progress: 'absolute inset-x-0 bottom-0 bg-mocha-500/40',
        close: 'p-0 text-mocha-500 hover:text-mocha-200 transition-colors',
      },
    },
    toaster: {
      defaultVariants: {
        position: 'bottom-right',
      },
    },
  },
})
