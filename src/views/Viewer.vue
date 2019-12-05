<template>
  <div>
    <slidemeister-web ref="slidemeisterweb" :jingles="[]" configuration="[]" route=""></slidemeister-web>
  </div>
</template>

<script>

  import SlidemeisterWeb from "@/components/SlidemeisterWeb";

export default {
  name: 'viewer',
  components: {
    SlidemeisterWeb,
  }
}
</script>
<style lang="scss">
  body {
    background: black;
  }
</style>
