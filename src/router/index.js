import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/inicio"
    }, {
        path: "/",
        component: {
            render(c) {
                return c("router-view");
            }
        },
        //los que renderizan dentro de router-vue
        children: [
            {
                path: '/inicio',
                name: 'Inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path: '/main',
                name: 'Main',
                component: () => import('../components/Main.vue')
            },
            {
                path: '/tercero',
                name: 'tercero',
                component: () => import('../components/tercero.vue')
            },
            {
                path: '/rentarEspacio',
                name: 'Rentar',
                component: () => import('../components/RentarEspacio.vue')
            },
            {
                path: '/infoEspacio',
                name: 'Informacion',
                component: () => import('../components/infoSpace.vue')
            },
            {
                path: '/ofertarEspacio',
                name: 'Ofertar',
                component: () => import('../components/OfertarEspacio.vue')
            },

            {
                path: '/alquilarEspacio',
                name: 'Alquilar',
                component: () => import('../components/AlquilarEspacio.vue')
            },
            {
                path: '/espacios',
                name: 'Catalago',
                component: () => import('../components/SpaceCatalog.vue')
            },
            {
                path: '/detallesEspacio',
                name: 'Detalles',
                component: () => import('../components/SpaceDetails.vue')
            }
        ]
    }
]

const router = new VueRouter({routes});
export default router;