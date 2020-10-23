<template>
  <b-container fluid style="border-top: 5px solid rgb(247, 175, 20);">
    <b-row style="margin-top:20px">
      <b-col sm="3" class="iconsearch" style="display:flex;">      
        <span class="iconshopping">
          <fa-icon class="iconoIcono" :icon="['fas', 'search']" size="2x" />
          <span class="iconoIconoTexto">Buscar</span>
        </span>
        <span class="iconshopping">
          <fa-icon class="iconoIcono" :icon="['fas', 'bars']" size="2x" />
          <span class="iconoIconoTexto">Menu</span>
        </span>
      </b-col>
      <b-col sm="6" class="text-center logo_img">      
        <img id="logoImagen" alt="Steel Of Elements" src="../assets/logoDos.png" />
      </b-col>
      <b-col sm="3" class="iconbasket"> 
        <b-row style="display:flex">     
            <b-col class="iconshopping">
              <fa-icon class="iconoIcono" :icon="['fas', 'shopping-cart']" size="2x" />
              <span class="iconoIconoTexto">Carrito</span>
            </b-col>
            <b-col class="iconshopping">
              <fa-icon class="iconoIcono" :icon="['fas', 'heart']" size="2x" />
              <span class="iconoIconoTexto">Favoritos</span>
            </b-col>
            <b-col class="iconshopping">
              <fa-icon class="iconoIcono" :icon="['fas', 'user']" size="2x" />
              <span class="iconoIconoTexto">Mi Cuenta</span>
            </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-nav >
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Aretes"
          toggle-class="nav-link-custom"
          right
          clas
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
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Encabezado",
};
</script>
<style scoped>
.nav{
 border-top: 2px solid gray;
}
.iconshopping{
  font-size: 18px;
}
@media only screen and (max-width: 1180px) {
  .iconshopping{
  font-size: 15px!important;
  }
  .iconoIconoTexto{
    border: 0px solid blue!important;
  display: block!important;
  text-align: center!important;
  font-size: 12px!important;
  }
}
@media only screen and (max-width: 1180px) {
  .iconshopping{
  font-size: 13px!important;
  }
  .iconoIconoTexto{
    border: 0px solid blue!important;
  display: block!important;
  text-align: center!important;
  font-size: 11px!important;
  }
}
@media only screen and (max-width: 806px) {
  .iconshopping{
  font-size: 11px!important;
  }
  .iconoIconoTexto{
    border: 0px solid blue!important;
  display: block!important;
  text-align: center!important;
  font-size: 9px!important;
  }
}
@media only screen and (max-width: 726px) {
  .iconshopping{
  font-size: 9px!important;
  }
  .iconoIconoTexto{
    border: 0px solid blue!important;
  display: block!important;
  text-align: center!important;
  font-size: 7px!important;
  }
}
#logoImagen {
  border: 0px solid red;
  width: 30%;
  text-align: center;
}

.iconoSpan {
  border: 0px solid red;
  display: inline-block;
  width: 33%;
}
.iconoIcono {
  border: 0px solid blue;
  display: block;
  width: 100%;
  text-align: center;
}
.iconoIconoTexto{
  border: 0px solid blue;
  display: block;
  text-align: center;
  font-size: 15px;
}
@media only screen and (max-width: 850px) {
  .iconbasket{
  width: 30%!important;
  }
  .iconsearch{
  width: 40%!important;
  }
  .logo_img{
  width: 30%!important;
  }
  
}
@media only screen and (max-width: 648px) {
  .iconbasket{
  width: 40%!important;
  }
  .iconsearch{
  width: 20%!important;
  }
  .logo_img{
  width: 40%!important;
  }
  
}


</style>