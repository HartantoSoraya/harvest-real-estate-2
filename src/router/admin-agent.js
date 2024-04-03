const adminAgentRoutes = [
    {
      path: 'agents',
      component: () => import('../pages/admin/agent/agents.vue'),
      name: 'admin-agents',
    },
    {
      path: 'agent/create',
      component: () => import('../pages/admin/agent/create-agent.vue'),
      name: 'admin-agent-create',
    },
    {
      path: 'agent/:id',
      component: () => import('../pages/admin/agent/agent.vue'),
      name: 'admin-agent-view',
    },
    {
      path: 'agent/:id/edit',
      component: () => import('../pages/admin/agent/edit-agent.vue'),
      name: 'admin-agent-edit',
    },
  ]
  
  export default adminAgentRoutes
  