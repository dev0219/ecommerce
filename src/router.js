import DetalleArticulo from '@/components/DetalleArticulo.vue'
import CarritoCompra from '@/components/CarritoCompra.vue'
import PantallaInicial from '@/components/PantallaInicial.vue'
import CatalogoProductos from '@/components/CatalogoProductos.vue'


const routes = [
    {
        path: "/",
        name: "pantallaCuatro",
        component: PantallaInicial
    },
    {
        path: "/pantallaDos",
        name: "pantallaDos",
        component: DetalleArticulo
    },
    {
        path: "/pantallaTres",
        name: "pantallaTres",
        component: CarritoCompra
    },
    {
        path: "/pantallaCinco",
        name: "pantallaCinco",
        component: CatalogoProductos
    }
];

export default routes