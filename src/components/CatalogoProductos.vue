<template>
  <div id="principalDiv">
    <!--<div id="encabezadoDosDiv">
      <div id="iconosEncabezadosUno">
        <fa-icon class="iconoEncabezado" :icon="['fas', 'search']" size="2x" />
        <fa-icon class="iconoEncabezado" :icon="['fas', 'bars']" size="2x" />
      </div>
      <img id="logoImagen" alt="Steel Of Elements" src="../assets/logo.png" />
      <div id="iconosEncabezadosDos">
        <fa-icon class="iconoEncabezado" :icon="['fas', 'shopping-cart']" size="2x" />
        <fa-icon class="iconoEncabezado" :icon="['fas', 'heart']" size="2x" />
        <fa-icon class="iconoEncabezado" :icon="['fas', 'user']" size="2x" />
      </div>
    </div>
    <div id="categoriasDosDiv">
      <b-nav pills align="center">
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Aretes"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Brazaletes"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Anillos"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Collares"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Juegos"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown id="my-nav-dropdown" text="Otros" toggle-class="nav-link-custom" right>
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Fábrica"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Ir a tienda CDMX</b-nav-item>
      </b-nav>
    </div>-->
    <div id="categoriasImagenDiv">
      <div
        class="categoriasImagenDivHijo"
        v-for="(categoriaImagen, indexCategoriaImagen) in categoriasImagen"
        :key="indexCategoriaImagen"
      >
        <span class="categoriaSpan">Anillos</span>
        <img class="categoriasImagenImg" :src="categoriaImagen.source" />
      </div>
      <div class="categoriasImagenDivHijo">
        <fa-icon id="plusIcono" :icon="['fas', 'plus-circle']" size="3x" />
      </div>
    </div>
    <div id="catalogoOPcionesDivP">
      <div id="catalogoOpcionesDivUno">
        <b-form-group>
          <b-form-checkbox-group
            v-model="caracteristicaSeleccionada"
            :options="caracteristicasOpciones"
            name="categoriasUno"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
      </div>
      <div id="catalogoOpcionesDivDos">
        <div
          class="catalogoOpcionesHijo"
          v-for="(imagenCatalogo, indexImagenCatalogo) in imagenesCatalogo"
          :key="indexImagenCatalogo"
        >
          <div class="imagenDiv">
            <router-link :to="{name: 'pantallaDos'}">
            <img class="imagenCatalogo" :src="imagenCatalogo.source" />
            </router-link>
          </div>
          <p class="descripcionArticulo">{{imagenCatalogo.descripcion}}</p>
          <div class="precioCantidadArticuloDiv">
            <div class="precioArticuloDiv">
              Precio: ${{imagenCatalogo.precio}}
              Descuento: {{imagenCatalogo.descuento}}%
              Subtotal: ${{imagenCatalogo.subtotal}}
            </div>
            <div class="cantidadArticuloDiv">
              Cantidad
              <br />
              <span class="aumentoDecrementoSpan">-</span>
              <span class="cantidadArticuloSpan">0</span>
              <span class="aumentoDecrementoSpan">+</span>
            </div>
            <div class="agregarAlCarritoDiv">Agregar al Carrito</div>
          </div>
        </div>
      </div>
    </div>
   <!-- <div id="piePaginaDiv">
      <div id="piePaginaLeftDiv">
        <p>
          <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'lock']" />
          </span>Compra Segura
        </p>
        <p>
          <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'hotel']" />
          </span>Entrega en Sucursal
        </p>
        <p>
          <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'shuttle-van']" />
          </span>Envios a Domicilio
        </p>
        <p>
          <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'award']" />
          </span>Garantía
        </p>
        <p>
          <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'phone-volume']" />
          </span>¿Necesitas ayuda? Llamanos al
          <span id="telefono">00-000-00-000</span>
        </p>
      </div>
      <div id="piePaginaRightDiv">
        <div id="piePaginaRightHijoDiv">
          <fa-icon class="iconoPiePaginaRight" :icon="['fab', 'facebook-square']" size="3x" />
          <fa-icon class="iconoPiePaginaRight" :icon="['fab', 'whatsapp-square']" size="3x" />
          <fa-icon class="iconoPiePaginaRight" :icon="['fab', 'instagram-square']" size="3x" />
        </div>
      </div>
      <h4
        id="derechosH"
      >&copy; 2019 Todos los derechos reservados | Sitio diseñado y desarrollado por by Elements</h4>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "PantallaCinco",
  data: function () {
    return {
      caracteristicaSeleccionada: [],
      caracteristicasOpciones: [
        {
          text: "Dorado",
          value: "doradoUno",
        },
        {
          text: "Dorado",
          value: "doradoDos",
        },
        {
          text: "Dorado",
          value: "doradoTres",
        },
        {
          text: "Dorado",
          value: "doradoCuatro",
        },
        {
          text: "Dorado",
          value: "doradoCinco",
        },
        {
          text: "Dorado",
          value: "doradoSeis",
        },
      ],
      imagenesCatalogo: [
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
        {
          source:
            "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-petite-diamond-engagement-ring-14k-rose-gold-/setting_template_main?$phab_detailmain$&$diam_shape=is{bluenile/main_NGN_RD_standard_100}&$diam_position=0,150&$ring_position=0,0&$ring_sku=is{bluenile/58236_NGN_setmain}",
          descripcion: "Anillo Esmaltado color Rose",
          precio: 100,
          descuento: 50,
          subtotal: 50,
        },
      ],
      categoriasImagen: [
        {
          source:
            "https://cdn.shopify.com/s/files/1/0036/6401/9556/products/anillo-de-compromiso-halo-exclusivo-2-0mm-oro-blanco-14k-1-jpg_1024x1024.jpg?v=1566141111",
          categoria: "Anillos",
        },
      ],
    };
  },
};
</script>
<style scoped>
#principalDiv {
  border: 0px solid rebeccapurple;
}
#encabezadoDosDiv {
  border: 0px solid green;
  text-align: center;
}
#iconosEncabezadosUno {
  border: 0px solid red;
  float: left;
  display: inline-block;
  margin-top: 10px;
}
.iconoEncabezado {
  margin-left: 35px;
}
#logoImagen {
  display: inline-block;
}
#iconosEncabezadosDos {
  border: 0px solid red;
  float: right;
  display: inline-block;
  margin-top: 10px;
}
#categoriasDosDiv {
  border-top: 1px solid red;
}
#categoriasImagenDiv{
  border-top: 1px solid rgb(247, 175, 20);
}
.categoriasImagenDivHijo{
  float: left;
  border: 1px solid rgb(247, 175, 20);
  width: 100px;
  height: 100px;
  margin: 3px;
  text-align: center;
}
.categoriaSpan{
  border: 0px solid black;
  display: block;
  margin-top: 5px;
}
.categoriasImagenImg{
  width: 100%;
  height: 69%;
  border: 0px solid red;
}
#plusIcono{
  margin-top: 15px;
}
#catalogoOPcionesDivP{
  clear: left;
  border: 0px solid rgb(247, 175, 20);
  height: auto;
}
#catalogoOpcionesDivUno{
  border-top: 1px solid rgb(247, 175, 20);
  float: left;
  width: 20%;
  text-align: center;
  padding-top: 20px;
}
#catalogoOpcionesDivDos {
  border-left: 1px solid rgb(247, 175, 20);
  border-top: 1px solid rgb(247, 175, 20);
  float: left;
  width: 80%;
}
.catalogoOpcionesHijo {
  border: 0px solid black;
  width: 200px;
  height: auto;
  display: inline-block;
  margin: 15px;
}
.imagenDiv {
  border: 0px solid red;
  height: 100px;
}
.imagenCatalogo {
  width: 100%;
  height: 100%;
}
.descripcionArticulo {
  font-size: 10px;
}
.precioCantidadArticuloDiv {
  border: 0px solid rebeccapurple;
}
.precioArticuloDiv {
  border: 0px solid olivedrab;
  width: 50%;
  float: left;
  height: 70px;
  font-size: 10px;
  padding-left: 10px;
  padding-top: 5px;
}
.cantidadArticuloDiv {
  border: 0px solid green;
  width: 50%;
  float: left;
  text-align: center;
}
.aumentoDecrementoSpan {
  border: 2px solid orange;
  font-size: 25px;
  cursor: pointer;
  font-weight: bold;
}
.cantidadArticuloSpan {
  border: 2px solid orange;
  margin: 8px;
  display: inline-block;
  width: 30px;
}
.agregarAlCarritoDiv {
  clear: left;
  border: 0px solid black;
  background-color: orange;
  color: white;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
}
#piePaginaDiv {
  clear: left;
  border-top: 1px solid red;
  border-bottom: 10px solid orange;
}
#piePaginaLeftDiv {
  border: 0px solid blue;
  float: left;
  width: 50%;
  height: 200px;
  padding-top: 10px;
  padding-left: 20px;
}

#piePaginaRightDiv {
  border: 0px solid rgb(192, 231, 14);
  float: left;
  width: 50%;
  height: 200px;
  display: flex;
  align-items: center;
}
#piePaginaRightHijoDiv {
  margin: 0 auto;
}
#derechosH {
  clear: left;
  text-align: center;
}
.iconoPiePaginaRight {
  margin-left: 20px;
}
.iconoresumenCompraUno {
  padding-right: 8px;
}
#telefono {
  color: red;
  text-decoration-line: underline;
}
</style>