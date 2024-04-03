<script setup>
import { useAgentStore } from '@/stores/agent'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'

const { loading, error } = storeToRefs(useAgentStore())
const { createAgent } = useAgentStore()

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

const handleReset = () => {
  code.value = ''
  name.value = ''
  description.value = ''
  specialization.value = ''
  email.value = ''
  phone_number.value = ''
  facebook.value = ''
  twitter.value = ''
  instagram.value = ''
  linkedin.value = ''
  avatar.value = null
  avatar_name.value = ''
  slug.value = ''
}

const handleSubmit = () => {
  createAgent({
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

onMounted(() => {
  document.title = 'Create Agent'
})

onUnmounted(() => {
  handleReset()

  error.value = null
})

const handleFileChange = e => {
  const file = e.target.files[0]

  if (file) {
    avatar.value = file
  }
}
</script>

<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Add Agent
      </h2>

      <VBtn to="/admin/agents" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="code" label="Code" placeholder="Code"
                :error-messages="error && error.code ? [error.code] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Name" placeholder="Name"
                :error-messages="error && error.name ? [error.name] : []" />
            </VCol>

            <VCol cols="12">
              <VTextarea v-model="description" label="Description" placeholder="Description"
              :error-messages="error && error.description ? [error.description] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VFileInput v-model="avatar_name" label="Avatar" placeholder="Avatar"
                :error-messages="error && error.avatar ? [error.avatar] : []" @change="handleFileChange" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="specialization" label="Specialization" placeholder="Specialization"
                :error-messages="error && error.specialization ? [error.specialization] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="email" label="Email" placeholder="Email"
                :error-messages="error && error.email ? [error.email] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="phone_number" label="Phone Number" placeholder="Phone Number"
                :error-messages="error && error.phone_number ? [error.phone_number] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="facebook" label="Facebook" placeholder="Facebook"
                :error-messages="error && error.facebook ? [error.facebook] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="twitter" label="Twitter" placeholder="Twitter"
                :error-messages="error && error.twitter ? [error.twitter] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="instagram" label="Instagram" placeholder="Instagram"
                :error-messages="error && error.instagram ? [error.instagram] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="linkedin" label="Linkedin" placeholder="Linkedin"
                :error-messages="error && error.linkedin ? [error.linkedin] : []" />
            </VCol>

            <VCol cols="12">
              <VTextField v-model="slug" label="Slug" placeholder="Slug"
                :error-messages="error && error.slug ? [error.slug] : []" />
            </VCol>

            <VCol cols="12" class="d-flex gap-4">
              <VBtn type="submit" :loading="loading" color="primary">
                Save
              </VBtn>

              <VBtn color="secondary" variant="tonal" @click="handleReset">
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>