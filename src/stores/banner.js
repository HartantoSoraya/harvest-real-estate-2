import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useBannerStore = defineStore({
    id: 'banner',
    state: () => ({
        banners: [],
        loading: false,
        error: null,
        success: null
    }),
    actions: {
        async fetchBanners() {
            try {
                this.loading = true

                const response = await axiosInstance.get('/banners')

                this.banners = response.data.data
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async fetchBanner(id) {
            try {
                this.loading = true

                const response = await axiosInstance.get(`/banner/${id}`)

                return response.data.data
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async createBanner(payload) {
            try {
                this.loading = true

                const response = await axiosInstance.post('/banner', payload)

                this.success = response.data.message

                router.push({ name: 'admin-banners' })
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async updateBanner(payload) {
            try {
                this.loading = true

                const response = await axiosInstance.post(`/banner/${payload.id}`, payload)

                this.success = response.data.message

                router.push({ name: 'admin-banners' })
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async deleteBanner(id) {
            try {
                this.loading = true

                const response = await axiosInstance.delete(`/banner/${id}`)

                this.success = response.data.message
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        }
    }
})
