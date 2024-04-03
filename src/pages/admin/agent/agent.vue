<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Agent
      </h2>

      <VBtn :to="{ name: 'admin-agents' }" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm>
          <VRow>
            <VCol cols="12" md="12">
              <VImg v-if="avatar" :src="avatar" :alt="name" width="200" height="200" />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="code" label="Code" placeholder="Code"
                :error-messages="error && error.code ? [error.code] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="name" label="Name" placeholder="Name"
                :error-messages="error && error.name ? [error.name] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12">
              <VTextarea v-model="description" label="Description" placeholder="Description"
                :error-messages="error && error.description ? [error.description] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="specialization" label="Specialization" placeholder="Specialization"
                :error-messages="error && error.specialization ? [error.specialization] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="email" label="Email" placeholder="Email"
                :error-messages="error && error.email ? [error.email] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="phone_number" label="Phone Number" placeholder="Phone Number"
                :error-messages="error && error.phone_number ? [error.phone_number] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="facebook" label="Facebook" placeholder="Facebook"
                :error-messages="error && error.facebook ? [error.facebook] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="twitter" label="Twitter" placeholder="Twitter"
                :error-messages="error && error.twitter ? [error.twitter] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="instagram" label="Instagram" placeholder="Instagram"
                :error-messages="error && error.instagram ? [error.instagram] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="linkedin" label="Linkedin" placeholder="Linkedin"
                :error-messages="error && error.linkedin ? [error.linkedin] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="slug" label="Slug" placeholder="Slug"
                :error-messages="error && error.slug ? [error.slug] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>   
  </VRow>
</template>

<script setup>
import { useAgentStore } from '@/stores/agent'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useAgentStore())
const { fetchAgent } = useAgentStore()

const agentId = route.params.id

const code = ref({})
const name = ref({})
const description = ref({})
const specialization = ref({})
const email = ref({})
const phone_number = ref({})
const facebook = ref({})
const twitter = ref({})
const instagram = ref({})
const linkedin = ref({})
const avatar = ref(null)
const slug = ref({})

const fetchAgentData = async () => {
  try {
    const data = await fetchAgent(agentId)
    code.value = data.code
    name.value = data.name
    description.value = data.description
    specialization.value = data.specialization
    email.value = data.email
    phone_number.value = data.phone_number
    facebook.value = data.facebook
    twitter.value = data.twitter
    instagram.value = data.instagram
    linkedin.value = data.linkedin
    avatar.value = data.avatar_url
    slug.value = data.slug
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchAgentData()

  document.title = 'Agent'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>