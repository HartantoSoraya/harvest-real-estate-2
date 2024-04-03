<script setup>
import { usePropertyTypeStore } from '@/stores/property-type'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'

const { loading, error } = storeToRefs(usePropertyTypeStore())
const { createPropertyType } = usePropertyTypeStore()

const name = ref('')
const slug = ref('')

const handleReset = () => {
    name.value = ''
    slug.value = ''
}

const handleSubmit = () => {
    createPropertyType({
        name: name.value,
        slug: slug.value,
    })
}

onMounted(() => {
    document.title = 'Create Property Type'
})

onUnmounted(() => {
    handleReset()

    error.value = null
})
</script>

<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Add Property Type
      </h2>

      <VBtn to="/admin/property-types" color="primary">
        Back
      </VBtn>
    </VCol>

      <VCol cols="12">
        <VCard>
          <VForm @submit.prevent="handleSubmit">
            <VRow>
              <VCol cols="12" md="6">
                <VTextField v-model="name" label="Name" placeholder="Name"
                  :error-messages="error && error.name ? [error.name] : []" />
              </VCol>

              <VCol cols="12" md="6">
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