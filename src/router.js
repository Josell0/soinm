import {createRouter, createWebHistory} from 'vue-router';

import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Products from './views/Products.vue'
import Contact from './views/Contact.vue'
import Who from './views/Who.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/producto/:nombreProducto', component: Product},
    {path: '/productos', component: Products},
    {path: '/contacto', component: Contact},
    {path: '/quienessomos', component: Who},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;