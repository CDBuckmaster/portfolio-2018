<template>
  <div id="anemu">
        <div id="anemu-content">
            <div id="title">
                <h1>Anemu</h1>
            </div>
            <div id="content">
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zMjN8TVTc0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p><em>"Anemu is a mobile app for helping people of all ages identify Australian wildlife in an easy and visual way.  Users can use a photo of an animal they've taken with their phone and compare it to photos of other Animals, browsing based on how similar they think it looks.  Once they've identified the animal, they can look up scientific information about the animal, see the last reported location it was seen and even view a list of articles related to that animal."</em></p>
                <p>I worked on this project for Govhack 2015 over a period of 48 hours in a team of 4.  For more information, check out <a href="http://2015.hackerspace.govhack.org/content/anemu">the project page</a>, unfortunately, the app itself is no longer available.</p>
            </div>
        </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Anemu extends Vue {}
</script>

<style scoped lang="scss">
#anemu{
    background-color: #F9F9F9;
    min-height: calc(100% - 60px);
}

#anemu-content{
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