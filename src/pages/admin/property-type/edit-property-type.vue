<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Edit Property Type
      </h2>

      <VBtn :to="{ name: 'admin-property-types' }" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Name" placeholder="Name"
                :error-messages="error && error.name ? [error.name] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" md="6">
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
import { usePropertyTypeStore } from '@/stores/property-type'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(usePropertyTypeStore())
const { fetchPropertyType, updatePropertyType } = usePropertyTypeStore()

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
  document.title = 'Edit Property Type'
})

const handleSubmit = () => {
  updatePropertyType({
    id: propertyTypeId,
    name: name.value,
    slug: slug.value
  })
}

const handleReset = async () => {
  fetchPropertyTypeData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>