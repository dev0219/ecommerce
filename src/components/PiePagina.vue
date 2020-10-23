<template>
  <b-container fluid>
    <b-row id="piePaginaDiv">
      <b-col id="piePaginaLeftDiv">
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
      </b-col>
      <b-col id="piePaginaRightDiv">
        <div id="piePaginaRightHijoDiv">
          <fa-icon class="iconoPiePaginaRight" :icon="['fab', 'facebook-square']" size="3x" />
          <fa-icon class="iconoPiePaginaRight" :icon="['fab', 'whatsapp-square']" size="3x" />
          <fa-icon class="iconoPiePaginaRight" :icon="['fab', 'instagram-square']" size="3x" />
        </div>
      </b-col>      
    </b-row>          
    <b-row style="margin-left: 6px; margin-top: -35px;">
      <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'phone-volume']" />
          </span>¿Necesitas ayuda? Llamanos al
          <span id="telefono">00-000-00-000</span>
    </b-row>
    <b-row   style="border-bottom: 15px solid orange;">
      <b-col class="text-center">
        <h4 
        id="derechosH"
      >&copy; 2019 Todos los derechos reservados | Sitio diseñado y desarrollado por by Elements</h4>
      </b-col>      
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "PantallaDos",
  data: function () {
    return {
      
    }
  },
  methods:{

  }
};
</script>
<style scoped>
#piePaginaDiv {
  clear: left;
  border-top: 2px solid gray;
  
  margin-top: 8px;
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
  /* clear: left; */
  /* text-align: center; */
  font-size: 15px;
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