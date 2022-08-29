<template>
  <div>
    <div class="nav">
      <div class="messenger">
        <Messenger />
      </div>
      <Logo />
      <ul class="nav-list">
        <li class="nav-list-enumeration"><a href="#" class="nav-list-link">вк</a></li>
        <li class="nav-list-enumeration"><a href="#" class="nav-list-link">фб</a></li>
        <li class="nav-list-enumeration"><a href="#" class="nav-list-link">ин</a></li>
        <li class="nav-list-enumeration"><a href="#" class="nav-list-link">тг</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/uikit/Logo';
import Messenger from '~/components/uikit/Messenger';


export default {
  name: "Index",
  components: {
      Logo,
      Messenger
  }
}
</script>

<style lang="scss">
  @import '~/components/uikit/Navbar/style';
</style>
