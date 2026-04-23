import { defineStore } from 'pinia'

type BookingDraft = {
  service: string
  date: string
  time: string
  address: string
  notes: string
}

export const useBookingStore = defineStore('booking', {
  state: () => ({
    draft: {
      service: '',
      date: '',
      time: '',
      address: '',
      notes: ''
    } as BookingDraft
  }),

  actions: {
    setDraft(payload: BookingDraft) {
      this.draft = { ...payload }
    },

    clearDraft() {
      this.draft = {
        service: '',
        date: '',
        time: '',
        address: '',
        notes: ''
      }
    }
  }
})