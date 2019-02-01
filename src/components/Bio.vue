<template>
    <div id="bio">
        <div id="title">
            <h1>About</h1>
        </div>
        <div id="flex-container">
            <div id="photo" class="flex-item">
                <img src="@/assets/images/me.png"/>
            </div>
            <div id="blurb" class="flex-item">
                <p>Hello there, my name is <span class="highlight">Callum Buckmaster</span> and I'm your friendly neighbourhood web developer. I currently work with tech like <span class="highlight">Vue</span>, <span class="highlight">NodeJs</span> and <span class="highlight">Laravel</span>, as well as <span class="highlight">MySQL</span> and <span class="highlight">MongoDB</span></p>
                <p>Feel free to see what I'm up to on <a href="https://www.linkedin.com/in/callum-buckmaster-56623285/">Linkedin</a> or <a href="https://twitter.com/CDBuckmaster">Twitter</a> and send me a message if you're interested.</p>
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
    padding-top: 60px;
    background-color: #F9F9F9;
}

#title{
    text-decoration: underline;
}

#title h1{
    margin: 0;
}

#flex-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 960px;
    margin: auto;
    padding-bottom: 50px;
    padding-left: 15px;
    padding-right: 15px;
    flex-wrap: wrap;
}

.flex-item{
    flex-grow: 1;
    min-width: 200px;
    max-width: 400px;
}

#blurb{
    font-size: 1.2em;
    min-width: 300px;
}

.highlight{
    font-weight: bold;
}

@media only screen and (max-width: 768px) {
    #photo img{
        width: 230px;
    }
}
</style>