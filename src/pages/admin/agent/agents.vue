<script setup>
import { useAgentStore } from '@/stores/agent'

const headers = [
  {
    text: 'Code',
    value: 'code',
  },
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Description',
    value: 'description',
  },
  {
    text: 'Specialization',
    value: 'specialization',
  },
  {
    text: 'Email',
    value: 'email',
  },
  {
    text: 'Phone Number',
    value: 'phone_number',
  },
  {
    text: 'Facebook',
    value: 'facebook',
  },
  {
    text: 'Twitter',
    value: 'twitter',
  },
  {
    text: 'Instagram',
    value: 'instagram',
  },
  {
    text: 'Linkedin',
    value: 'linkedin',
  },
  {
    text: 'Avatar',
    value: 'avatar',
  },
  {
    text: 'Slug',
    value: 'slug',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { agents, loading, error, success } = storeToRefs(useAgentStore())
const { fetchAgents, deleteAgent } = useAgentStore()

fetchAgents()

async function handleDeleteAgent(agent) {
  const confirmed = confirm('Are you sure you want to delete this agent?')

  if (confirmed) {
    await deleteAgent(agent.id)
    fetchAgents()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Agent'
})

onUnmounted(() => {
  error.value = null
})
</script>

<template>
  <VDialog v-if="success" v-model="success" max-width="400">
    <VCard>
      <VCardText> {{ success }} </VCardText>
      <VCardActions>
        <VBtn color="primary" text @click="() => (success = null)"> Close </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Agent
      </h2>

      <VBtn to="/admin/agent/create" color="primary">
        Add Agent
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField v-model="search" label="Search" placeholder="Search" clearable :loading="loading" variant="solo" />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable :headers="headers" :items="agents" :loading="loading" :search-value="search " buttons-pagination show-index class="data-table">
          <template #item-avatar="item">
            <VImg v-if="item.avatar" :src="item.avatar_url" :alt="item.name" width="200" height="200" />
          </template>
          <template #item-operation="item">
            <VBtn :to="{ name: 'admin-agent-edit', params: { id: item.id } }" color="primary" size="small" class="m-5">
              Edit
            </VBtn>
            <VBtn :to="{ name: 'admin-agent-view', params: { id: item.id } }" color="info" size="small">
              Detail
            </VBtn>
            <VBtn color="error" size="small" class="m-5" @click="handleDeleteAgent(item)">
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>