<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Product Category
      </h2>

      <VBtn :to="{ name: 'admin-property-categories' }" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm>
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Name" placeholder="Name"
                :error-messages="error && error.name ? [error.name] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="icon" label="Icon" placeholder="Icon"
                :error-messages="error && error.icon ? [error.icon] : []" :disabled="loading" :loading="loading" readonly />
            </VCol>

            <VCol cols="12">
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
import { usePropertyCategoryStore } from '@/stores/property-category'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(usePropertyCategoryStore())
const { fetchPropertyCategory } = usePropertyCategoryStore()

const propertyCategoryId = route.params.id

const name = ref('')
const icon = ref('')
const slug = ref('')

const fetchPropertyCategoryData = async () => {
  try {

    const data = await fetchPropertyCategory(propertyCategoryId)

    name.value = data.name
    icon.value = data.icon
    slug.value = data.slug
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchPropertyCategoryData()

  document.title = 'Product Category'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>