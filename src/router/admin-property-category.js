const adminPropertyCategoryRoutes = [
    {
        path: 'property-categories',
        component: () => import('../pages/admin/property-category/property-categories.vue'),
        name: 'admin-property-categories',
    },
    {
        path: 'property-category/create',
        component: () => import('../pages/admin/property-category/create-property-category.vue'),
        name: 'admin-property-category-create',
    },
    {
        path: 'property-category/:id',
        component: () => import('../pages/admin/property-category/property-category.vue'),
        name: 'admin-property-category-view',
    },
    {
        path: 'property-category/:id/edit',
        component: () => import('../pages/admin/property-category/edit-property-category.vue'),
        name: 'admin-property-category-edit',
    },
]

export default adminPropertyCategoryRoutes