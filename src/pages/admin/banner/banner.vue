<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Banner
      </h2>

      <VBtn :to="{ name: 'admin-banners' }" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm>
          <VRow>
            <VCol cols="12" md="12">
              <VImg v-if="image" :src="image" :alt="name" width="200" height="200" />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="title" label="Title" placeholder="Title"
                :error-messages="error && error.title ? [error.title] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12">
              <VTextarea v-model="description" label="Description" placeholder="Description"
                :error-messages="error && error.description ? [error.description] : []" :disabled="loading"
                :loading="loading" readonly />
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
const { fetchBanner } = useBannerStore()

const bannerId = route.params.id

const image = ref('')
const title = ref(null)
const description = ref('')

const fetchBannerData = async () => {
  try {
    const data = await fetchBanner(bannerId)

    image.value = data.image_url
    title.value = data.title
    description.value = data.description
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchBannerData()

  document.title = 'Banner'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>