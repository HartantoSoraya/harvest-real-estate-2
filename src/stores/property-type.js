import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const usePropertyTypeStore = defineStore({
  id: 'propertyType',
  state: () => ({
    propertyTypes: [],
    loading: false,
    error: null,
    success: null
  }),
  actions: {
    async fetchPropertyTypes() {
      try {
        this.loading = true
        const response = await axiosInstance.get('/property-types')
        this.propertyTypes = response.data.data
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchPropertyType(id) {
      try {
        this.loading = true
        const response = await axiosInstance.get(`/property-type/${id}`)
        return response.data.data
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createPropertyType(payload) {
      try{
        this.loading = true

        const response = await axiosInstance.post('/property-type', payload)

        this.success = response.data.message

        router.push({ name: 'admin-property-types' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updatePropertyType(payload) {
      try{
        this.loading = true

        const response = await axiosInstance.post(`/property-type/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-property-types' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deletePropertyType(id) {
      try {
        this.loading = true
        const response = await axiosInstance.delete(`/property-type/${id}`)
        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    }
  }
})