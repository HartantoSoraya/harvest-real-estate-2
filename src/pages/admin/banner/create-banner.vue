<script setup>
import { useBannerStore } from '@/stores/banner'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'

const { loading, error } = storeToRefs(useBannerStore())
const { createBanner } = useBannerStore()

const image = ref('')
const image_name = ref('')
const title = ref('')
const description = ref('')

const handleReset = () => {
  image.value = null
  image_name.value = ''
  title.value = ''
  description.value = ''
}

const handleSubmit = () => {
  createBanner({
    image: image.value,
    title: title.value,
    description: description.value,
  })
}

onMounted(() => {
  document.title = 'Create Banner'
})

onUnmounted(() => {
  handleReset()

  error.value = null
})

const handleFileChange = e => {
  const file = e.target.files[0]

  if (file) {
    image.value = file
  }
}
</script>

<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Add Banner
      </h2>

      <VBtn to="/admin/banners" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VFileInput v-model="image_name" label="Banner" placeholder="Banner"
                :error-messages="error && error.image ? [error.image] : []" @change="handleFileChange" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="title" label="Title" placeholder="Title"
                :error-messages="error && error.title ? [error.title] : []" />
            </VCol>

            <VCol cols="12">
              <VTextarea v-model="description" label="Description" placeholder="Description"
                :error-messages="error && error.description ? [error.description] : []" />
            </VCol>

            <VCol cols="12">
              <VBtn type="submit" :loading="loading" color="primary">
                Submit
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