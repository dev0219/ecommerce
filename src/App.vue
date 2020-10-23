<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<PantallaCinco />-->
    <Encabezado />
    <router-view></router-view>
    <PiePagina />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import PantallaUno from './components/PantallaUno.vue'
import Encabezado from './components/Encabezado.vue'
import PiePagina from './components/PiePagina.vue'
//import PantallaDos from './components/PantallaDos.vue'
//import PantallaTres from './components/PantallaTres.vue'
//import PantallaCuatro from './components/PantallaCuatro.vue'
//import PantallaCinco from './components/PantallaCinco.vue'


export default {
  name: 'App',
  components: {
    //PantallaUno
    Encabezado,
    PiePagina
    //PantallaCuatro
    //PantallaTres
    //PantallaDos
    //HelloWorld
    //PantallaCinco
  }
}
</script>

<style>

</style>
