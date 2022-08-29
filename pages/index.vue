<template>
  <div class="body">
    <DefaultLayout>
      <Hero />
      <div class="twoTelephone">
        <img src="~/assets/images/heroTelephoneOne.webp" alt="heroTelephoneOne" class="heroTelephoneOne">
        <img src="~/assets/images/heroTelephoneTwo.webp" alt="heroTelephoneTwo" class="heroTelephoneTwo">
      </div>
      <AdvantagesOne />
      <AccordionBlock />
      <FormBlock />
    </DefaultLayout>

  </div>
</template>

<script>
import DefaultLayout from "~/layouts/DefaultLayout";
import Hero from "~/components/indexPage/Hero";
import AdvantagesOne from "~/components/indexPage/AdvantagesOne";
import AccordionBlock from "~/components/indexPage/AccordionBlock";
import FormBlock from "~/components/indexPage/FormBlock";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default {
  name: "Index",
  components: {
    DefaultLayout,
    Hero,
    AdvantagesOne,
    AccordionBlock,
    FormBlock,
  },
  mounted() { 
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: ".twoTelephone",
        start: "top center",
        end: "center center",
        scrub: 1,
      }
    })
    .to(".heroTelephoneOne",  { yPercent: -20, duration:5 }, 0)
    .to(".heroTelephoneTwo",  { yPercent: 20, duration:5 }, 0)
  }
}

</script>

<style lang="scss">
  @import '~/styles/style';
</style>
