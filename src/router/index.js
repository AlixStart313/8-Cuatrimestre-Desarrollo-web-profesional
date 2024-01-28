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
                component: () => import('../components/others/Inicio.vue')
            },
            {
                path: '/main',
                name: 'Main',
                component: () => import('../components/Main.vue')
            },
            {
                path: '/tercero',
                name: 'Tercero',
                component: () => import('../components/others/tercero.vue')
            },

            {
                path: '/rentarEspacio',
                name: 'Rentar',
                component: () => import('../components/space/RentarEspacio.vue')
            },
            {
                path: '/infoEspacio',
                name: 'Informacion',
                component: () => import('../components/space/infoSpace.vue')
            },
            {
                path: '/ofertarEspacio',
                name: 'Ofertar',
                component: () => import('../components/space/OfertarEspacio.vue')
            },

            {
                path: '/alquilarEspacio',
                name: 'Alquilar',
                component: () => import('../components/space/AlquilarEspacio.vue')
            },
            {
                path: '/espacios',
                name: 'Catalago',
                component: () => import('../components/space/SpaceCatalog.vue')
            },
            {
                path: '/detallesEspacio',
                name: 'Detalles',
                component: () => import('../components/space/SpaceDetails.vue')
            },
            {
                path: '/Formulario',
                name: 'Formulario',
                component: () => import('../components/Person/RegisterPerson.vue')
            }
        ]
    }
]

const router = new VueRouter({routes});
export default router;