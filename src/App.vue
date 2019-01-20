<template>
  <div id="app">
    <Header></Header>
    <bio></bio>
    <work-list></work-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Bio from './components/Bio.vue';
import WorkList from './components/WorkList.vue';

@Component({
  components: {
    Header,
    Bio,
    WorkList
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html{
height: 100%;
}

body{
  height: 100%;
  margin: 0 0 0 0;
  background-color: #1e1e1e;
}
</style>
