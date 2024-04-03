import { axiosInstance } from '@/plugins/axios';
import router from '@/router';
import { defineStore } from 'pinia';
import { handleError } from '@/helpers/errorHelper';

export const usePropertyCategoryStore = defineStore({
    id: 'propertyCategory',
    state: () => ({
        propertyCategories: [],
        loading: false,
        error: null,
        success: null,
    }),
    actions: {
        async fetchPropertyCategories() {
            try {
                this.loading = true;
                const response = await axiosInstance.get('/property-categories');
                this.propertyCategories = response.data.data;
            } catch (error) {
                this.error = handleError(error);
            } finally {
                this.loading = false;
            }
        },
        async fetchPropertyCategory(id) {
            try {
                this.loading = true
                const response = await axiosInstance.get(`/property-category/${id}`)
                return response.data.data
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async createPropertyCategory(payload) {
            try {
                this.loading = true
                const response = await axiosInstance.post('/property-category', payload)
                this.success = response.data.message
                router.push({ name: 'admin-property-categories' })
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async updatePropertyCategory(payload) {
            try {
                this.loading = true
                const response = await axiosInstance.post(`/property-category/${payload.id}`, payload)
                this.success = response.data.message
                router.push({ name: 'admin-property-categories' })
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async deletePropertyCategory(id) {
            try {
                this.loading = true
                const response = await axiosInstance.delete(`/property-category/${id}`)
                this.success = response.data.message
                
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        }
    }
})