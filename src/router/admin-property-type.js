const adminPropertyTypeRoutes = [
    {
        path: 'property-types',
        component: () => import('../pages/admin/property-type/property-types.vue'),
        name: 'admin-property-types',
    },
    {
        path: 'property-type/create',
        component: () => import('../pages/admin/property-type/create-property-type.vue'),
        name: 'admin-property-type-create',
    },
    {
        path: 'property-type/:id',
        component: () => import('../pages/admin/property-type/property-type.vue'),
        name: 'admin-property-type-view',
    },
    {
        path: 'property-type/:id/edit',
        component: () => import('../pages/admin/property-type/edit-property-type.vue'),
        name: 'admin-property-type-edit',
    },
]

export default adminPropertyTypeRoutes