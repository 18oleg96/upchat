<template>
  <div class="hero">
    <div class="hero-heading">
      <div class="hero-one"> 
        <span class="hero-line-one"> Увеличьте </span> 
        <span class="hero-line-one"> продажи </span> 
        <span class="hero-line-one"><img src="~/assets/images/rocket.png" alt=""  class="heroImg"></span>
        <span class="hero-line-one-Mobile"><img src="~/assets/images/bright.svg" alt=""  class="heroImgMobile"></span> 
        <span class="hero-line-one"> сократите </span> 
        <span class="hero-line-one"> расходы </span> 
      </div>
      <div class="hero-two"> 
        <span class="hero-line-two"> и </span> 
        <span class="hero-line-two"> автоматизируйте </span> 
        <span class="hero-line-two"><img src="~/assets/images/rock.png" alt=""  class="rock"></span> 
        <span class="hero-line-two"> поддержку </span> 
        <span class="hero-line-two"> клиентов </span> 
        <span class="hero-line-two"><img src="~/assets/images/rock.png" alt=""  class="heroImg imgRock"></span> 
      </div> 
      <div class="hero-three"> 
        <span class="hero-line-three"> в </span> 
        <span class="hero-line-icon"><img src="~/assets/images/telegram.svg" alt=""  class="heroImg"></span> 
        <span class="hero-line-three"> Telegram </span> 
        <span class="hero-line-icon"><img src="~/assets/images/vk.svg" alt=""  class="heroImg"></span> 
        <span class="hero-line-three"> Вконтакте </span> 
        <span class="hero-line-icon"><img src="~/assets/images/messenger.svg" alt="" class="heroImg"></span> 
        <span class="hero-line-three"> Messenger </span> 
      </div>
      <div class="hero-four"> 
        <span class="hero-line-four hero-line-four-mobile"> или </span> 
        <span class="hero-line-four hero-line-four-mobile"> в </span> 
        <span class="hero-line-icon hero-line-four-mobile"><img src="~/assets/images/whatsapp.png" alt="" class="heroImgWhats"></span> 
        <span class="hero-line-four hero-line-four-mobile"> WhatsApp </span> 
        <span class="hero-line-four"> с </span> 
        <span class="hero-line-four"> помощью </span> 
        <span class="hero-line-four"> чат-бота </span> 
      </div>
    </div>
    <p class="hero-text">
      Успешно создаем и внедряем чат-боты в бизнес с 2018 года
    </p>
    <div class="button">
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "~/components/uikit/Button";

export default {
  name: "Index",
  components: {
    Button

  },
}
</script>

<style lang="scss">
  @import '~/components/indexPage/Hero/style';
</style>