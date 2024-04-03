import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const usePropertyAmenityStore = defineStore({
  id: 'propertyAmenity',
  state: () => ({
    propertyAmenities: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchPropertyAmenities() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/property-amenities')

        this.propertyAmenities = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchPropertyAmenity(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/property-amenity/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createPropertyAmenity(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/property-amenity', payload)

        this.success = response.data.message

        router.push({ name: 'admin-property-amenities' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updatePropertyAmenity(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/property-amenity/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-property-amenities' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deletePropertyAmenity(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/property-amenity/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    }
  }
})