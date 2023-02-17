
<template>
    <div class="cNavBar">

        <div class="cLogo">
            <router-link to="/">
                <img src="../assets/SOinmDia.svg" alt="">
            </router-link>
            <p>Soluciones Inmediatas Sac.</p>
        </div>
        <div class="cSkin">
            <p>Dia</p>
            <div class="cSwitch">
                <div class="cCircle">

                </div>

            </div>
            <p>Noche</p>
        </div>
        <div class="cButtons">
            <router-link to="/">Inicio</router-link>
            <router-link to="/productos">Productos</router-link>
            <router-link to="/quienessomos">Quienes Somos</router-link>
            <router-link to="/contacto">Contacto</router-link>
        </div>
    </div>
    <hr class="cHr">
</template>

<script setup>





</script>

<style>

.cNavBar{
    
    margin-left: 2.5rem;
    margin-top: 3rem;
    margin-right: 2.5rem;
    padding-bottom: 1rem;
    border-bottom: solid 3px #1A1F4E;
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    
    
}

.cLogo, .cSkin{
    display: flex;
    
    
}

.cLogo{
    padding-left: 2rem;
    grid-column: 1;
}

.cLogo img {
    width: 6rem;
    
}

.cLogo p{
    
    color: #1A1F4E;
    font-size: 1.25rem;
    font-style: italic;
    position: absolute;
    bottom: .9rem;
    margin-left: 7rem;
    
    
}

.cSkin{
    /* position: absolute; */
    grid-column: 2;
    text-align: center;
}

.cSwitch{
    display: flex;
    width: 3rem;
    height: 1.5rem;
    border-radius: 1rem;
    background-color: #1A1F4E;
    margin-left: .5rem;
    margin-right: .5rem;
    align-items: center;
    cursor: pointer;
}

.cCircle{
    width: 1.2rem;
    height: 1.2rem;
    border-radius: .65rem;
    background-color: #F58333;
    margin-left: .1rem;
}
.cSkin p{
    color: #1A1F4E;
    font-size: 1rem;
}

.cButtons{
    position: absolute;
    right: 0;
    bottom: .9rem;
    padding-right: 2rem;
    grid-column: 3;
}

.cButtons a {
    font-size: 1.2rem;
    color: #1A1F4E;
    margin-left: 4rem;
    text-decoration: none;
    font-weight: 500;
}

.cHr{
    border-color: #F58333;
    border-width: 2px;
    height: 3px;
}
</style>
