<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Product Type
      </h2>

      <VBtn :to="{ name: 'admin-property-types' }" color="primary">
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
import { usePropertyTypeStore } from '@/stores/property-type'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(usePropertyTypeStore())
const { fetchPropertyType } = usePropertyTypeStore()

const propertyTypeId = route.params.id

const name = ref('')
const slug = ref('')

const fetchPropertyTypeData = async () => {
  try {

    const data = await fetchPropertyType(propertyTypeId)

    name.value = data.name
    slug.value = data.slug
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchPropertyTypeData()

  document.title = 'Product Type'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>