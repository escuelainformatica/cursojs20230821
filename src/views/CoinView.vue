<script setup>
import { ref, onMounted } from 'vue';
import coincliente from '../coincliente.js';

let tipomoneda = ref('');
let moneda = ref('');
let listadomonedas = ref([]);

function obtenerMoneda() {
    moneda.value='cargando...';
    coincliente.obtenerMoneda(tipomoneda.value)
        .then((response) => moneda.value=response.data.coin.price)
        .catch((error) => console.log(error));
}
// https://api.coinstats.app/public/v1/coins
coincliente.obtenerTodasMonedas()
    .then(function (response) {
        listadomonedas.value = response.data.coins;
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });


</script>
<template>
    <select v-model="tipomoneda">
        <option :value="fila.id" v-for="fila in listadomonedas">{{ fila.name }}</option>
    </select><br>
    <button v-on:click="obtenerMoneda">Obtener moneda</button><br>
    El valor es: {{ moneda }}<br>
</template>