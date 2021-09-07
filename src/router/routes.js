
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/accounts/Index.vue') },
      { path: 'accounts', component: () => import('pages/accounts/Index.vue') },
      { path: 'accounts/:id', component: () => import('pages/accounts/_id/Index.vue') },
      { path: 'accounts/:id/edit', component: () => import('pages/accounts/_id/Edit.vue') },
      { path: 'addresses', component: () => import('pages/addresses/Index.vue') },
      { path: 'addresses/:id', component: () => import('pages/addresses/_id/Index.vue') },
      { path: 'addresses/:id/edit', component: () => import('pages/addresses/_id/Edit.vue') },
      { path: 'addresses/add', component: () => import('pages/addresses/Add.vue') },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
