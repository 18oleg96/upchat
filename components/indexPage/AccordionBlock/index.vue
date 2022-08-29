<template>
  <div class="accordionBlock">
    <div class="accordionDescription">
      <div> 
        <span> Вот три кита </span> 
        <span><img src="~/assets/images/whale.png" alt="" class="accordionImgWhale"></span> 
      </div>
      <div> 
        <span> на которых построен </span> 
      </div>
      <div> 
        <span> наш процесс разработки </span> 
        <span><img src="~/assets/images/mansurfing.png" alt="" class="accordionImg"></span> 
      </div>
    </div>
    <div class="ac-container">
      <div>
        <input id="ac-1" name="accordion-1" type="checkbox" checked />
        <label for="ac-1" >
          <div class="accordion bord">
            <div>
              <span class="number">
                01.
              </span>
              <span class="accordionHeading">
                Проектирование
              </span>
            </div>
            <div>
              <img src="~/assets/images/plus.svg" alt="" class="accordionplus">
            </div>
          </div>
        </label>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Minima, ducimus modi non aperiam 
            placeat ipsum atque reprehenderit amet sunt expedita explicabo 
            assumenda? Debitis deleniti officiis ipsum veniam quos repellat expedita?
          </p>
        </article>
      </div>
      <div>
        <input id="ac-2" name="accordion-1" type="checkbox" />
        <label for="ac-2">
          <div class="accordion">
            <div>
              <span class="number">
                02.
              </span>
              <span class="accordionHeading">
                Разработка и интеграция
              </span>
            </div>
            <div>
              <img src="~/assets/images/plus.svg" alt="" class="accordionplus">
            </div>
          </div>
        </label>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Minima, ducimus modi non aperiam 
            placeat ipsum atque reprehenderit amet sunt expedita explicabo 
            assumenda? Debitis deleniti officiis ipsum veniam quos repellat expedita?
          </p>
        </article>
      </div>
      <div>
        <input id="ac-3" name="accordion-1" type="checkbox" />
        <label for="ac-3">
          <div class="accordion bord">
            <div>
              <span class="number">
                03.
              </span>
              <span class="accordionHeading">
                Запуск и поддержка
              </span>
            </div>
            <div>
              <img src="~/assets/images/plus.svg" alt="" class="accordionplus">
            </div>
          </div>
        </label>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Minima, ducimus modi non aperiam 
            placeat ipsum atque reprehenderit amet sunt expedita explicabo 
            assumenda? Debitis deleniti officiis ipsum veniam quos repellat expedita?
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Index",
  components: {

  },
}
</script>

<style lang="scss">
  @import '~/components/indexPage/AccordionBlock/style';
</style>