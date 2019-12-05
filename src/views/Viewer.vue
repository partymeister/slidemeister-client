<template>
  <div>
    <configuration v-show="showConfiguration"></configuration>
    <slidemeister-viewer ref="slidemeisterweb"></slidemeister-viewer>
  </div>
</template>

<script>

  import SlidemeisterViewer from "@/components/SlidemeisterViewer";
  import Configuration from "@/components/Configuration";

export default {
  name: 'viewer',
  components: {
    Configuration,
    SlidemeisterViewer,
  },
  data: function() {
    return {
      showConfiguration: false,
    };
  },
  mounted() {
    this.$eventHub.$on('show-viewer', () => {
      this.showConfiguration = false;
    });
    this.$eventHub.$on('show-configuration', () => {
      this.showConfiguration = true;
    });
  }
}
</script>
<style lang="scss">
  body {
    background: black;
  }
</style>
