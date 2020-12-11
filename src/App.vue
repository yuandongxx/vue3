<template>
  <Window />
</template>

<script>
import Window from "./window/Window.vue";
export default {
  name: "App",
  components: {
    Window: Window,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
