export default defineEventHandler(() => {
  return [
    {
      id: 1,
      topic: 'booking',
      label: 'How do I create a booking?',
      icon: 'i-lucide-circle-help',
      content: 'Choose a service, pick a slot, review the details, then confirm the booking request.'
    },
    {
      id: 2,
      topic: 'pricing',
      label: 'Are listed prices final?',
      icon: 'i-lucide-circle-help',
      content: 'Prices shown in this version are starting estimates and can later be refined by backend rules.'
    },
    {
      id: 3,
      topic: 'services',
      label: 'How do I know which service fits me?',
      icon: 'i-lucide-circle-help',
      content: 'Use the service detail pages, comparison page, and category browsing to narrow down the right fit.'
    },
    {
      id: 4,
      topic: 'business',
      label: 'Can businesses request custom service scope?',
      icon: 'i-lucide-circle-help',
      content: 'Yes. The business request page is designed for larger scope requests and future quotation logic.'
    },
    {
      id: 5,
      topic: 'account',
      label: 'Can I save multiple addresses?',
      icon: 'i-lucide-circle-help',
      content: 'Yes. This frontend layer now includes a dedicated saved-addresses page.'
    }
  ]
})