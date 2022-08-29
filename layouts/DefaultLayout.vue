<template>
  <div>
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/uikit/Navbar/';
import Footer from '~/components/uikit/Footer/';

export default {
  name: "DefaultLayout",
  components: {
    Navbar,      
    Footer
  },
}
</script>