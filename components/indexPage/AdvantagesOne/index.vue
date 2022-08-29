<template>
  <div class="allBlocks">
    <div class="blockText">
      <section class="advantagesOne">
        <div class="advantagesOneDescription">
          <div class="advantages">
            <div>
              <span> Получите до 80% больше </span> 
            </div>
            <div>
              <span> просмотров </span> 
              <span><img src="~/assets/images/eyesBlockOne.png" alt="" class="advantagesImg"></span>
              <span> и до 30% </span> 
            </div>
            <div>
              <span> кликов чем при Email </span> 
            </div>
            <div>
              <span> маркетинге </span> 
              <span><img src="~/assets/images/emailBlockOne.png" alt="" class="advantagesImg"></span>
            </div>
          </div>
          <div class="enumeration">
            <div class="blockEnumeration">
              <img src="~/assets/images/loveBlockOne.png" alt="" class="enumerationImg">
              <p class="enumerationDiscription">
                Рассылайте новости и промо акции
              </p>
            </div>
            <div class="blockEnumeration">
              <img src="~/assets/images/balloonBlockOne.png" alt="" class="enumerationImg">
              <p class="enumerationDiscription">
                Поддерживайте контакт с клиентом после продажи
              </p>
            </div>
            <div class="blockEnumeration">
              <img src="~/assets/images/catBlockOne.png" alt="" class="enumerationImg">
              <p class="enumerationDiscription">
                Собирайте информацию о своих клиентах
              </p>
            </div>
            <div class="blockEnumeration">
              <img src="~/assets/images/boxBlockOne.png" alt="" class="enumerationImg">
              <p class="enumerationDiscription">
                Отправляйте информацию прямо в CRM
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="advantagesOne advantagesTwo">
        <div class="advantagesOneDescription">
          <div class="advantages">
            <div>
              <span> Снизьте загрузку  </span> 
            </div>
            <div>
              <span> менеджеров на 85% </span> 
              <span><img src="~/assets/images/manLifting.png" alt="" class="advantagesImg"></span>
            </div>
            <div>
              <span> и автоматизируйте </span> 
            </div>
            <div>
              <span> продажи  </span> 
              <span><img src="~/assets/images/receipt.png" alt="" class="advantagesImg"></span>
            </div>
          </div>
          <div class="enumeration">
            <div class="blockEnumeration">
              <img src="~/assets/images/nail.png" alt="" class="enumerationImg">
              <p class="enumerationDiscription">
                Записывайте клиентов на прием
              </p>
            </div>
            <div class="blockEnumeration">
              <img src="~/assets/images/money.png" alt="" class="enumerationImg">
              <p class="enumerationDiscription">
                Принимайте оплату через бота
              </p>
            </div>
            <div class="blockEnumeration">
              <img src="~/assets/images/shopping.png" alt="" class="enumerationImg">
              <p class="enumerationDiscription">
                Создайте интернет-магазин
              </p>
            </div>
            <div class="blockEnumeration">
              <img src="~/assets/images/manTechnologist.png" alt="" class="enumerationImg">
              <p class="enumerationDiscription">
                Подключайте менеджера прямо в чат с клиентом
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="advantagesOne advantagesThree">
        <div class="advantagesOneDescription">
          <div class="advantages">
            <div>
              <span> Уменьшите время   </span> 
            </div>
            <div>
              <span> ожидания клиента </span> 
              <span><img src="~/assets/images/clock.png" alt="" class="advantagesImg"></span>
            </div>
            <div>
              <span> и сократите затраты </span> 
            </div>
            <div>
              <span> на поддержку   </span> 
              <span><img src="~/assets/images/headphone.png" alt="" class="advantagesImg"></span>
            </div>
          </div>
          <div class="enumeration">
            <div class="blockEnumeration">
              <img src="~/assets/images/heart.png" alt="" class="enumerationImg">
              <p class="enumerationDiscription">
                Собирайте отзывы пользователей
              </p>
            </div>
            <div class="blockEnumeration">
              <img src="~/assets/images/speechballoon.png" alt="" class="enumerationImg">
              <p class="enumerationDiscription">
                Создайте базу ответов на частые вопросы
              </p>
            </div>
          </div>
        </div> 
      </section>
    </div>

    <div class="phonone">
        <div class="telephonone">
          <img src="~/assets/images/telephonone.webp" alt="" class="telephononeImg1">
        </div>
        <div class="telephonone">
          <img src="~/assets/images/telephontwo.webp" alt="" class="telephononeImg2">
        </div>
        <div class="telephonone">
          <img src="~/assets/images/telephonthree.webp" alt="" class="telephononeImg3">
        </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  name: "Index",
  components: {

  },

  mounted() { 
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll('section');


    sections.forEach((section) => {
      gsap.to('.telephononeImg1', {autoAlpha: 1,
        scrollTrigger: {
          trigger: '.advantagesOne',
          start: 'top center',
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      });
      gsap.to('.telephononeImg2', {autoAlpha: 1,
        scrollTrigger: {
          trigger: '.advantagesTwo',
          start: 'center center',
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      });
      gsap.to('.telephononeImg3', {autoAlpha: 1,
        scrollTrigger: {
          trigger: '.advantagesThree',
          start: 'top center',
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      });
    })
  }
}

</script>

<style lang="scss">
  @import '~/components/indexPage/AdvantagesOne/style';
</style>