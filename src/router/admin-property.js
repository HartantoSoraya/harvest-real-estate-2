const adminProductRoutes = [
    {
      path: 'properties',
      component: () => import('../pages/admin/property/properties.vue'),
      name: 'admin-properties',
    },
    {
        path: 'property/create',
        component: () => import('../pages/admin/property/create-property.vue'),
        name: 'admin-property-create',
    },
    {
        path: 'property/:id',
        component: () => import('../pages/admin/property/property.vue'),
        name: 'admin-property-view',
    },
    {
        path: 'property/:id',
        component: () => import('../pages/admin/property/edit-property.vue'),
        name: 'admin-property-edit',
    }
]

export default adminProductRoutes