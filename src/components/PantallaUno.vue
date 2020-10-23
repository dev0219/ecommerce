<template>
  <div id="divPrincipal">
    <!--<div id="divUno">
      <div id="cuadrito">
        <b-dropdown id="dropDown" class="m-2">
          <template v-slot:button-content>
            <b-icon-menu-up />
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
      </div>
      <div id="logo">
        <img id="logoImagen" alt="Steel Of Elements" src="../assets/logo.png" />
      </div>
      <div id="miCuentaDiv">
        <span class="iconoSpan">
          <fa-icon :icon="['fas', 'shopping-cart']" />Carrito
        </span>
        <span class="iconoSpan">
          <fa-icon :icon="['fas', 'heart']" />Favoritos
        </span>
        <span class="iconoSpan">
          <fa-icon :icon="['fas', 'user']" />Mi Cuenta
        </span>
      </div>
    </div>
    <div id="divDos">
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
    </div>
    <div id="divTres">
      <div id="divTresH">
        <button id="botonBuscar" type="submit" class="btn btn-primary btn-sm">
          <b-icon-search id="buscarIcono" />
        </button>
        <input id="inputBuscar" type="search" class="input-sm form-control" placeholder="Búsqueda" />
      </div>
    </div>-->
    <div id="divCuatro">
      <b-carousel id="carousel-fade" :interval="2000" fade indicators controls>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="slide"
              src="https://sc01.alicdn.com/kf/HTB1S03nclGE3KVjSZFhq6AkaFXau.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="slide"
              src="https://sc01.alicdn.com/kf/H250a9e3a09fa48728f5ab5c0ac455672l.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="slide"
              src="https://i.pinimg.com/originals/7c/c0/bc/7cc0bc25e32f53e73233666c56e80030.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="slide"
              src="https://www.americaeconomia.com/sites/7.americaeconomia.com/files/styles/ae_main/public/field/image/oro_7.jpg?itok=w-vwPJvV"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="slide"
              src="https://www.joyasboda.com.mx/images/banner-home.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div id="divCinco">
      <b-form-group>
        <b-form-checkbox-group v-model="selected" :options="options" name="flavour-2a" stacked></b-form-checkbox-group>
      </b-form-group>
    </div>
    <div id="divSeis">
      <div class="imagenCatalogoDiv">
        <router-link :to="{name: 'pantallaDos'}">
        <img
          class="imagenCatalogo"
          src="https://i.pinimg.com/originals/72/1d/9e/721d9e8de8f32fe7bb15652c31660ed5.jpg"

        />
        </router-link>
        <span
          class="imagenCatalogoTexto"
        >asksalkdsalk saksaksak saklsalksalk saysayusayu salksalksa asdsa sadd asdasfdsafsafsf retertr uiyuiyuiiu qwewqsdsd</span>
      </div>
      <div class="imagenCatalogoDiv">
        <img
          class="imagenCatalogo" 
          src="../assets/imagenes/7.jpg"
        />
        <span
          class="imagenCatalogoTexto"
        >asksalkdsalk saksaksak saklsalksalk saysayusayu salksalksa asdsa sadd asdasfdsafsafsf retertr uiyuiyuiiu qwewqsdsd</span>
      </div>
      <div class="imagenCatalogoDiv">
        <img
          class="imagenCatalogo"
          src="https://elsouvenir.com/wp-content/uploads/2019/07/Comprar-plata-en-M%C3%A9xico-Foto.-Pixabay-560x600.jpg"
        />
        <span class="imagenCatalogoTexto">asksalkdsalk saksaksak saklsalksalk saysayusayu salksalksa asdsa sadd asdasfdsafsafsf retertr uiyuiyuiiu qwewqsdsd</span>
      </div>
      <div class="imagenCatalogoDiv">
        <img
          class="imagenCatalogo"
          src="https://www.tierrarossa.com/wp-content/uploads/2019/02/2-1-360x320.jpg"
        />
        <span
          class="imagenCatalogoTexto"
        >asksalkdsalk saksaksak saklsalksalk saysayusayu salksalksa asdsa sadd asdasfdsafsafsf retertr uiyuiyuiiu qwewqsdsd</span>
      </div>
      <div class="imagenCatalogoDiv">
        <img
          class="imagenCatalogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyus93nKdpLFEmmA1v6AZtAIBCEn3WC3PEfQ&usqp=CAU"
        />
        <span
          class="imagenCatalogoTexto"
        >asksalkdsalk saksaksak saklsalksalk saysayusayu salksalksa asdsa sadd asdasfdsafsafsf retertr uiyuiyuiiu qwewqsdsd</span>
      </div>
      <div class="imagenCatalogoDiv">
        <img
          class="imagenCatalogo"
          src="https://lh3.googleusercontent.com/proxy/7_RD9erNPQGvSY8KsbTRJvGkEk_7ZqWXDnTkLCkZD5-Tm6HR4xBLubXak9mUXow0MQM1Tv3md8NK7WFltnnLwt2LqUqu1blnpU0hyvX2NlRDg2j3j3hh9SYkrwQmqGjiYKRyt0fyJODj3PEdoK9jBw"
        />
        <span
          class="imagenCatalogoTexto"
        >asksalkdsalk saksaksak saklsalksalk saysayusayu salksalksa asdsa sadd asdasfdsafsafsf retertr uiyuiyuiiu qwewqsdsd</span>
      </div>
      <div class="imagenCatalogoDiv">
        <img
          class="imagenCatalogo"
          src="https://keueljoyeria.files.wordpress.com/2018/01/joyeria-moda-keuel.jpg?w=600"
        />
        <span
          class="imagenCatalogoTexto"
        >asksalkdsalk saksaksak saklsalksalk saysayusayu salksalksa asdsa sadd asdasfdsafsafsf retertr uiyuiyuiiu qwewqsdsd</span>
      </div>
      <div class="imagenCatalogoDiv">
        <img
          class="imagenCatalogo"
          src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:good/mg/images/categorias/d-accesorios-moda/f-moda-accesorios-joyeria/l-joyeria-aretes.jpg"
        />
        <span
          class="imagenCatalogoTexto"
        >asksalkdsalk saksaksak saklsalksalk saysayusayu salksalksa asdsa sadd asdasfdsafsafsf retertr uiyuiyuiiu qwewqsdsd</span>
      </div>
      <div class="imagenCatalogoDiv">
        <img
          class="imagenCatalogo"
          src="https://cnnespanol.cnn.com/wp-content/uploads/2019/07/190722175153-mexico-narcotrafico-joyas-subasta-pkg-krupskaia-alis-00005206-full-169.jpg?quality=100&strip=info"
        />
        <span
          class="imagenCatalogoTexto"
        >asksalkdsalk saksaksak saklsalksalk saysayusayu salksalksa asdsa sadd asdasfdsafsafsf retertr uiyuiyuiiu qwewqsdsd</span>
      </div>
      <div class="imagenCatalogoDiv">
        <img
          class="imagenCatalogo"
          src="https://ae01.alicdn.com/kf/H17c59d6fe924445ea60b03d3922524234/Anillo-de-palo-joyer-a-fina-Pt900-joyer-a-de-platino-Origen-de-M-xico-palo.jpg_q50.jpg"
        />
        <span
          class="imagenCatalogoTexto"
        >asksalkdsalk saksaksak saklsalksalk saysayusayu salksalksa asdsa sadd asdasfdsafsafsf retertr uiyuiyuiiu qwewqsdsd</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PantallaUno",
  data: function () {
    return {
      selected: [],
      options: [
        { text: "Dorado", value: "Dorado" },
        { text: "Plateado", value: "Plateado" },
        { text: "Rosado", value: "Rosado" },
        { text: "Lo más vendido", value: "Lo más vendido" },
        { text: "Acero", value: "Acero" },
        { text: "Laminado", value: "Laminado" },
        { text: "Marca", value: "Marca" },
        { text: "Fábrica", value: "Fábrica" },
      ],
    };
  },
};
</script>
<style scoped>
#divUno {
  background-color: none;
  border-top: 8px solid rgb(247, 175, 20);
}
#divDos {
  clear: left;
  background-color: none;
  border: none;
  height: 100px;
}
#divTres {
  clear: left;
  text-align: center;
  background-color: none;
  border: none;
  margin-bottom: 30px;
}
#divTresH {
  display: inline-block;
}
#divCuatro {
  width: 1000px;
  height: 250px;
  margin: 0 auto;
  background-color: none;
  border: 5px solid rgb(247, 175, 20);
  padding: 0px;
}
#divCinco {
  background-color: none;
  border: none;
  width: 20%;
  float: left;
  margin-top: 20px;
  padding-left: 25px;
  padding-top: 15px;
}
#divSeis {
  background-color: none;
  border-left: 5px solid rgb(247, 175, 20);
  width: 80%;
  float: left;
  height: auto;
  overflow: hidden;
  margin-top: 20px;
}
#cuadrito {
  background-color: none;
  float: left;
  height: 80px;
  width: 33%;
}
#logo {
  float: left;
  background-color: none;
  height: 80px;
  width: 33%;
}
#logoImagen {
  /*width: 100%;*/
}
#miCuentaDiv {
  float: left;
  background-color: none;
  height: 80px;
  width: 34%;
}
#miCuenta {
  background-color: #ac5e3f;
  width: 34%;
  display: inline-block;
}
#favoritos {
  background-color: #05afda;
  width: 33%;
  display: inline-block;
}
#carrito {
  background-color: #dda01b;
  width: 33%;
  display: inline-block;
}
.menu {
  display: inline-block;
  border: 1px dotted red;
  width: 70px;
}
#inputBuscar {
  width: 900px;
  display: inline-block;
}
#botonBuscar {
  background-color: none;
}
#buscarIcono {
  height: 25px;
}
.slide {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 240px;
}
.imagenCatalogoDiv {
  width: 48%;
  display: inline-block;
  border: 2px solid rgb(247, 175, 20);
  margin: 1%;
  text-align: center;
}
.imagenCatalogo {
  width: 100%;
  height: 300px;
  cursor: pointer;
}
#dropDown {
  float: left;
}
.iconoSpan {
  float: right;
  padding-left: 20px;
}
.imagenCatalogoTexto {
  color: rgb(39, 38, 38);
  font-family: "Lucida Console", Courier, monospace;
}
</style>