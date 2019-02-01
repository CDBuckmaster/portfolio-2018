<template>
  <div id="alitternation">
        <div id="alitternation-content">
            <div id="title">
                <h1>alitternation</h1>
            </div>
            <div id="content">
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HDgeJ_7Nzmo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p><em>"Littering is an issue that every Australian is aware of, and yet it continues to be a problem despite the millions of dollars spent in clean up costs each year.</em></p>
                <p><em>Alitternation is a web application powered by government data that aims to give Australians both the knowledge and motivation to clean up their communities.</em></p>
                <p><em>With alitternation, users can easily lookup objects via several methods, such as barcode scanning, image recognition and simple product lookups to find out what they can do with it. From there the site can show the user where the nearest receptacle for it is, taking the hassle out of doing the right thing."</em></p>

                <p>I worked on this project for Govhack 2018 over a period of 48 hours in a team of 5.  For more information, check out <a href="https://2018.hackerspace.govhack.org/projects/alitternation_117">the project page</a>, or <a href="https://alitternation.com/">try it out</a> yourself.</p>
            </div>
        </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Alitternation extends Vue {}
</script>

<style scoped lang="scss">
#alitternation{
    background-color: #F9F9F9;
    min-height: calc(100% - 60px);
}

#alitternation-content{
    padding-left: 15px;
    padding-right: 15px;
    max-width: 960px;
    margin: auto;
    padding-bottom: 80px;
    padding-top: 60px;
}

#title{
    text-decoration: underline;
}

#title h1{
    margin: 0;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px; height: 0; overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>