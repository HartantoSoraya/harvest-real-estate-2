import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useAgentStore = defineStore({
    id: 'agent',
    state: () => ({
        agents: [],
        loading: false,
        error: null,
        success: null
    }),
    actions: {
        async fetchAgents() {
            try {
                this.loading = true
                const response = await axiosInstance.get('/agents')
                this.agents = response.data.data
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async fetchAgent(id) {
            try {
                this.loading = true
                const response = await axiosInstance.get(`/agent/${id}`)
                return response.data.data
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async createAgent(payload) {
            try {
                this.loading = true
                const response = await axiosInstance.post('/agent', payload)
                this.success = response.data.message
                router.push({ name: 'admin-agents' })
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async updateAgent(payload) {
            try {
                this.loading = true
                const response = await axiosInstance.post(`/agent/${payload.id}`, payload)
                this.success = response.data.message
                router.push({ name: 'admin-agents' })
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
        async deleteAgent(id) {
            try {
                this.loading = true
                const response = await axiosInstance.delete(`/agent/${id}`)
                this.success = response.data.message
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        }
    }
})