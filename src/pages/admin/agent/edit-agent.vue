<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Edit Agent
      </h2>
      
      <VBtn :to="{ name: 'admin-agents' }" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="code" label="Code" placeholder="Code"
                :error-messages="error && error.code ? [error.code] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Name" placeholder="Name"
                :error-messages="error && error.name ? [error.name] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12">
              <VTextarea v-model="description" label="Description" placeholder="Description"
                :error-messages="error && error.description ? [error.description] : []" :disabled="loading" :loading="loading" />
            </VCol>
            
            <VCol cols="12" md="6">
              <VFileInput v-model="avatar" label="Avatar" placeholder="Avatar"
                :error-messages="error && error.avatar ? [error.avatar] : []" @change="handleFileChange" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="specialization" label="Specialization" placeholder="Specialization"
                :error-messages="error && error.specialization ? [error.specialization] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="email" label="Email" placeholder="Email"
                :error-messages="error && error.email ? [error.email] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="phone_number" label="Phone Number" placeholder="Phone Number"
                :error-messages="error && error.phone_number ? [error.phone_number] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="facebook" label="Facebook" placeholder="Facebook"
                :error-messages="error && error.facebook ? [error.facebook] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="twitter" label="Twitter" placeholder="Twitter"
                :error-messages="error && error.twitter ? [error.twitter] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="instagram" label="Instagram" placeholder="Instagram"
                :error-messages="error && error.instagram ? [error.instagram] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="linkedin" label="Linkedin" placeholder="Linkedin"
                :error-messages="error && error.linkedin ? [error.linkedin] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12">
              <VTextField v-model="slug" label="Slug" placeholder="Slug"
                :error-messages="error && error.slug ? [error.slug] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" class="d-flex gap-4">
              <VBtn type="submit" :loading="loading" color="primary">
                Save
              </VBtn>

              <VBtn type="reset" color="secondary" variant="tonal" @click="handleReset">
                Reset
              </VBtn>
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
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useAgentStore())
const { fetchAgent, updateAgent } = useAgentStore()

const agentId = route.params.id

const code = ref('')
const name = ref('')
const description = ref('')
const specialization = ref('')
const email = ref('')
const phone_number = ref('')
const facebook = ref('')
const twitter = ref('')
const instagram = ref('')
const linkedin = ref('')
const avatar = ref(null)
const avatar_name = ref('')
const slug = ref('')

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
    slug.value = data.slug
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchAgentData()

  document.title = 'Edit Agent'
})

const handleSubmit = () => {
  updateAgent({
    id: agentId,
    code: code.value,
    name: name.value,
    description: description.value,
    specialization: specialization.value,
    email: email.value,
    phone_number: phone_number.value,
    facebook: facebook.value,
    twitter: twitter.value,
    instagram: instagram.value,
    linkedin: linkedin.value,
    avatar: avatar.value,
    slug: slug.value
  })
}

const handleReset = () => {
  fetchAgentData()
}

const handleFileChange = e => {
  const file = e.target.files[0]

  if (file) {
    avatar.value = file
    avatar_name.value = file.name
  }
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>