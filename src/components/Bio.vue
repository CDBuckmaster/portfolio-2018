<template>
    <div id="bio">
        <div id="title">
            <h1>About</h1>
        </div>
        <div id="flex-container">
            <div id="photo" class="flex-item"></div>
            <div id="blurb" class="flex-item">
                <p>Hello there, my name is <span class="highlight">Callum Buckmaster</span> and I'm your friendly neighbourhood web developer. I currently work with tech like <span class="highlight">Vue</span>, <span class="highlight">NodeJs</span> and <span class="highlight">Laravel</span>, as well as <span class="highlight">MySQL</span> and <span class="highlight">MongoDB</span></p>
            </div>
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
#bio{
    padding-top: 10px;
    background-color: #F9F9F9;
}

#title{
    text-decoration: underline;
}

#flex-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 800px;
    margin: auto;
    padding-bottom: 50px;
}

.flex-item{
    flex-grow: 1;
    min-width: 200px;
    max-width: 400px;
}

.highlight{
    font-weight: bold;
}

</style>