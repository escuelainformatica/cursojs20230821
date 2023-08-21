<script setup>

import { ref, onMounted } from 'vue'
import coincliente from '../coincliente.js';
let tipomoneda=ref('bitcoin');
let moneda = ref("el valor va aqui"); // clima es un valor referencial
function obtenerMoneda() {
    coincliente.obtenerMoneda(tipomoneda.value)
        .then(function (response) {
            moneda.value=response.data.coin.price;
            console.log(response);
        })
        .catch(function (error) {
            moneda.value="no encontrado";
            console.log(error);
        });
}

</script>
<template>
    <input type="text" v-model="tipomoneda"/><br>
    <button v-on:click="obtenerMoneda">Obtener Moneda</button><br>
    Precio ({{ tipomoneda }}): {{ moneda }}
</template>
<style></style>