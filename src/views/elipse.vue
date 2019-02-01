<template>
  <div id="elipse">
        <div id="elipse-content">
            <div id="title">
                <h1>eLIPSE - University of Queensland</h1>
            </div>
            <div id="content">
                <p>eLIPSE (Centre for eLearning Innovations and Partnerships in Science and Engineering) is a unit within the University of Queensland who specialise in providing support for eLearning Innovation via rapid and agile development of web solutions.  For more information, you can visit their <a href="https://www.elipse.uq.edu.au">website.</a>
                <p>Between 2014 and 2018, I worked within eLIPSE as a Web Applications Developer on multiple projects, such as the JourneyMaker, MyPyTutor and Data Rich Scenarios.  Although many of these projects are currently only accessible within UQ, if you are an academic institution and are interested in eLIPSE's work, I highly recommend that you contact them about your expression of interest.</p>
            </div>
        </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Elipse extends Vue {}
</script>

<style scoped lang="scss">
#elipse{
    background-color: #F9F9F9;
    min-height: calc(100% - 60px);
}

#elipse-content{
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
</style>