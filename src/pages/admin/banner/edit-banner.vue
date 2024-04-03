<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Edit Banner
      </h2>

      <VBtn :to="{ name: 'admin-banners' }" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VFileInput v-model="image_name" label="Banner" placeholder="Banner" :error-messages="error && error.image ? [error.image] : []" @change="handleFileChange" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="title" label="Title" placeholder="Title" :error-messages="error && error.title ? [error.title] : []" />
            </VCol>

            <VCol cols="12">
              <VTextarea v-model="description" label="Description" placeholder="Description" :error-messages="error && error.description ? [error.description] : []" />
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
import { useBannerStore } from '@/stores/banner'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useBannerStore())
const { fetchBanner, updateBanner } = useBannerStore()

const bannerId = route.params.id

const image = ref('')
const image_name = ref('')
const title = ref('')
const description = ref('')

const fetchBannerData = async () => {
  try {

    const data = await fetchBanner(bannerId)

    image.value = data.image
    title.value = data.title
    description.value = data.description

  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchBannerData()

  document.title = 'Edit Banner'
})

const handleSubmit = () => {
  updateBanner({
    id: bannerId,
    image: image_name.value,
    title: title.value,
    description: description.value
  })
}

const handleReset = () => {
  fetchBannerData()
}

const handleFileChange = e => {
  const file = e.target.files[0]

  if (file) {
    image.value = file
    image_name.value = file.name
  }
}
</script>