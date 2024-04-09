import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const usePropertyStore = defineStore({
  id: 'property',
  state: () => ({
    properties: [],
    loading: false,
    error: null,
    success: null
  }),
  actions: {
    async fetchProperties() {
      try {
        this.loading = true
        const response = await axiosInstance.get('/property')
        this.properties = response.data.data
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchFeaturedProperties() {
      try {
        this.loading = true
        const response = await axiosInstance.get('/property/read/active-featured')
        response.data.data
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchActiveProperties() {
      try {
        const response = await axiosInstance.get(`/property/read/active`)

        return response.data.data
      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async fetchProperty(id) {
      this.loading = true
      try {
        const response = await axiosInstance.get(`/property/${id}`)
        this.success = response.data.data
        this.loading = false
        return this.property
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createProperty(payload) {
      try {
        this.loading = true
        const response = await axiosInstance.post('/property', payload)
        this.success = response.data.message
        router.push({ name: 'admin-properties' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateProperty(payload) {
      try {
        this.loading = true
        const response = await axiosInstance.post(`/property/${payload.id}`, payload)
        this.success = response.data.message
        router.push({ name: 'admin-properties' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteProperty(id) {
      try {
        this.loading = true
        const response = await axiosInstance.delete(`/property/${id}`)
        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateActiveProperty(id, payload) {
      this.loading = true

      try {
        const response = await axiosInstance.post(`/property/active/${id}`, payload)
        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      }

      this.loading = false
    },
    async updateFeaturedProperty(id, payload) {
      this.loading = true

      try {
        const response = await axiosInstance.post(`/property/featured/${id}`, payload)
        this.success = response.data.message
      } catch (error) {
        this.error = error
      }
    }
  }
})