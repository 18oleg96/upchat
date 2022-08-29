<template>
  <div class="formBlock">
    <div class="formDescription">
      <div> 
        <span> Давайте создадим </span> 
      </div>
      <div> 
        <span> что-то крутое вместе </span> 
        <span><img src="~/assets/images/gemstone.png" alt="" class="formImg"></span> 
      </div>
    </div>

    <form action="https://jsonplaceholder.typicode.com/posts" autocomplete="on" method="POST" class="form">
      <h3 class="formText">
        Заполните форму
      </h3>
      <div class="formInput">
        <div class="enter">
          <input type="text" name="name" class="formName" placeholder="Как к вам обращаться *" required> 
        </div>
        <div class="enter">
          <input type="email" name="email" class="formEmail" placeholder="Ваш Email *" required>
        </div>
        <div class="enter">
          <input type="tel" name="tel" class="formTel" placeholder="Ваш номер телефона">
        </div>
        <div class="enter">
          <input type="text" name="text" class="formLogin" placeholder="Ваш логин телеграм">
        </div>
        <div class="enter">
         <input type="text" name="text" class="formChat" placeholder="Расскажите о чат-боте вашей мечты">
        </div>
      </div>
      <h3 class="formTextCall">
        Как связаться с вами
      </h3>
        <div class="formCheckbox">
          <div class="toggle-button toggle-button--aava">
            <input id="toggleButton1" type="checkbox">
            <label for="toggleButton1">по Email</label>
          </div>
          <div class="toggle-button toggle-button--aava">
            <input id="toggleButton2" type="checkbox">
            <label for="toggleButton2">по телефону</label>
          </div>
          <div class="toggle-button toggle-button--aava">
            <input id="toggleButton3" type="checkbox">
            <label for="toggleButton3">в WhatsApp</label>
          </div>
          <div class="toggle-button toggle-button--aava">
            <input id="toggleButton4" type="checkbox">
            <label for="toggleButton4">в Telegram</label>
          </div>
        </div>
        <div class="formApproval">
          <p class="approvalText">
            Нажимая на кнопку, вы даете <span class="approvalTextSpan">согласие</span> на обработку персональных 
            данных и соглашаетесь с <span class="approvalTextSpan"> <a href="#">политикой конфиденциальности</a></span>.
          </p>
        </div>

        <div type="submit" class="formBtn">
            <Button />
        </div>
    </form>
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
  @import '~/components/indexPage/FormBlock/style';
</style>