<script setup>
import { usePropertyStore } from '@/stores/property'
import { useAgentStore } from '@/stores/agent'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'

const { agents } = storeToRefs(useAgentStore())
const { fetchAgents } = useAgentStore()

fetchAgents()

const { loading, error } = storeToRefs(usePropertyStore())
const { createProperty } = usePropertyStore()

const title = ref('')
const description = ref('')
const loc_city = ref('')
const loc_latitude = ref('')
const loc_longitude = ref('')
const loc_address = ref('')
const loc_state = ref('')
const loc_zip = ref('')
const loc_country = ref('')
const price = ref('')
const agent_id = ref('')
const is_featured = ref(0)
const is_active = ref(1)
const is_sold = ref(0)
const is_rented = ref(0)
const offer_type = ref('')
const slug = ref('')

const handleReset = () => {
  title.value = ''
  description.value = ''
  loc_city.value = ''
  loc_latitude.value = ''
  loc_longitude.value = ''
  loc_address.value = ''
  loc_state.value = ''
  loc_zip.value = ''
  loc_country.value = ''
  price.value = ''
  agent_id.value = ''
  is_featured.value = 0
  is_active.value = 1
  is_sold.value = 0
  is_rented.value = 0
  offer_type.value = ''
  slug.value = ''
}

const handleSubmit = () => {
  createProperty({
    title: title.value,
    description: description.value,
    loc_city: loc_city.value,
    loc_latitude: loc_latitude.value,
    loc_longitude: loc_longitude.value,
    loc_address: loc_address.value,
    loc_state: loc_state.value,
    loc_zip: loc_zip.value,
    loc_country: loc_country.value,
    price: price.value.replace(/\D/g, ''),
    agent_id: agent_id.value,
    is_featured: is_featured.value,
    is_active: is_active.value,
    is_sold: is_sold.value,
    is_rented: is_rented.value,
    offer_type: offer_type.value,
    slug: slug.value
  })
}

onMounted(() => {
  handleReset()

  error.value = null
})
</script>

<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Add Property
      </h2>

      <VBtn to="/admin/property" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="title" label="Title" placeholder="Title"
                :error-messages="error && error.title ? [error.title] : []" />
            </VCol>

            <VCol cols="12">
              <VTextarea v-model="description" label="Description" placeholder="Description"
                :error-messages="error && error.description ? [error.description] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_city" label="City" placeholder="City"
                :error-messages="error && error.loc_city ? [error.loc_city] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_latitude" label="Latitude" placeholder="Latitude"
                :error-messages="error && error.loc_latitude ? [error.loc_latitude] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_longitude" label="Longitude" placeholder="Longitude"
                :error-messages="error && error.loc_longitude ? [error.loc_longitude] : []" />
            </VCol>
              
            <VCol cols="12" md="6">
              <VTextField v-model="loc_address" label="Address" placeholder="Address"
                :error-messages="error && error.loc_address ? [error.loc_address] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_state" label="State" placeholder="State"
                :error-messages="error && error.loc_state ? [error.loc_state] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_zip" label="Zip" placeholder="Zip"
                :error-messages="error && error.loc_zip ? [error.loc_zip] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_country" label="Country" placeholder="Country"
                :error-messages="error && error.loc_country ? [error.loc_country] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="price" label="Price" placeholder="Price"
                :error-messages="error && error.price ? [error.price] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VSelect v-model="agent_id" :items="agents" label="Agent" placeholder="Choose Agent"
                :error-messages="error && error.agent_id ? [error.agent_id] : []"
                item-title="name" item-value="id" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextarea v-model="offer_type" label="Offer Type" placeholder="Offer Type"
                :error-messages="error && error.offer_type ? [error.offer_type] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="slug" label="Slug" placeholder="Slug"
                :error-messages="error && error.slug ? [error.slug] : []" />
            </VCol>

            <VCol cols="12">
              <VBtn type="submit" :loading="loading" color="primary">
                Submit
              </VBtn>

              <VBtn type="reset" variant="tonal" @click="handleReset">
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>