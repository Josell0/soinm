<script setup>

</script>

<template>
  <div class="cSocial">
    <div class="cSocialSecondary">

    </div>
    <div class="cFacebook">
      <img src="./assets/socialFacebook.svg" alt="">
    </div>
    <div class="cTiktok">
      <img src="./assets/socialTiktok.svg" alt="">
    </div>

    <div class="cSocialMain">
      <div class="cWhatsapp">
        <img src="./assets/socialWhatsapp.svg" alt="">
      </div>
      <div class="cWhatsappText">

        <p>Escríbenos</p>
        <p>al 911-586-710</p>
      </div>

    </div>

  
  </div>
<router-view></router-view>
</template>

<style scoped>

.cSocial{
  position: fixed;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
}

.cFacebook, .cTiktok{
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
  margin-top: 2rem;
  border-radius: 50%;
  background-color: #1A1F4E;
  cursor: pointer;
}

.cFacebook:hover, .cTiktok:hover{
  scale: 1.1;
}



.cFacebook img{
  
  width: 1rem;
  
}
.cTiktok img{
  
  width: 1.5rem;
  
}

.cSocialMain{
  overflow: hidden;
  display: flex;
}
.cWhatsapp {
  position: relative;
  width: 15rem;
  height: 15rem;
  margin-top: 0;
  padding-top: 0;
  border-radius: 50%;
  background-color: #1A1F4E;
  bottom: -2.5rem;
  transform: translateX(-30%);
  cursor: pointer;
  
}

.cWhatsapp:hover{
  scale: 1.02;
}


.cWhatsapp img{
  position: absolute;
  right: 3rem;
  top: 2rem;
  width: 6rem;
}

.cWhatsappText{
position: fixed;
color: #1A1F4E;
font-size: 2.5rem;
font-weight: 500;
bottom: 2rem;
left: 10rem;

}

.cWhatsappText p:nth-of-type(2){
  padding-left: 1rem;
}
</style>
