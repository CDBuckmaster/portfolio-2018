<template>
  <div id="home">
    <bio></bio>
    <work-list></work-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bio from '@/components/Bio.vue';
import WorkList from '@/components/WorkList.vue';

@Component({
  components: {
    Bio,
    WorkList,
  },
})
export default class Home extends Vue {}
</script>