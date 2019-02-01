<template>
    <div id="work-list">
        <div id="title">
            <h1>Works</h1>
        </div>
        <div id="works-container">
            <router-link :to="{path:'/elipse', hash:'elipse'}">
                <div class="work">
                    <h1>eLIPSE</h1>
                    <div class="overlay">
                        <div class="overlay-text">eLIPSE - University of Queensland</div>
                    </div>
                </div>
            </router-link>
            <router-link :to="{path:'/alitternation', hash:'alitternation'}">
                <div class="work">
                    <img src="@/assets/images/alitternation.png"/>
                    <div class="overlay">
                        <div class="overlay-text">Alitternation</div>
                    </div>
                </div>
            </router-link>
            <router-link :to="{path:'/anemu', hash:'anemu'}">
                <div class="work">
                    <img src="@/assets/images/anemu.png"/>
                    <div class="overlay">
                        <div class="overlay-text">Anemu</div>
                    </div>
                </div>
            </router-link>
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
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #FFF;
}

#title{
    text-decoration: underline;
}

#title h1{
    margin: 0;
}

#works-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    max-width: 960px;
    margin: auto;
}

.work{
    margin: 10px 10px 10px 10px;
    width: 300px;
    height: 300px;
    background-color: #F9F9F9;
    position: relative;
}

.work img{
    max-width:95%;
    max-height:95%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.work h1{
    font-size: 50px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #1e1e1e;
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #1e1e1e;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
}

.work:hover .overlay {
    height: 50%;
}

.overlay-text {
    color: #FFF;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
}

</style>