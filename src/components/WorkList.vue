<template>
    <div id="work-list">
        <div id="title">
            <h1>Work</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Bio extends Vue {
}
</script>

<style scoped lang="scss">
#work-list{
    padding-top: 10px;
    height: 800px;
    background-color: #FFF;
}

#title{
    text-decoration: underline;
}

</style>