<template>
    <div id="header">
        <div id="header-content">
            <h1 class="name-title">| Callum Buckmaster |</h1>
        </div>
        <div id="sticky-header" class="unstuck" v-bind:class="[isStuck ? 'stuck' : '']">
            <div id="sticky-title">
                <h1 class="name-title">| Callum Buckmaster |</h1>
            </div>
            <nav>
                <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Works</a></li>
                </ul>
            </nav>
            <canvas class="tab" width="300" height="300">
            </canvas>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    sFrame = -1;
    isStuck = false;

    get scrollEnd(){
		const headerHeight = (<HTMLElement>this.$el).offsetHeight;
        const stickyHeight = (<HTMLElement>this.$el.querySelector("#sticky-header")).offsetHeight;
        const titleHeight = (<HTMLElement>this.$el.querySelector("#sticky-title")).offsetHeight;

		return headerHeight - stickyHeight - titleHeight;
	}
    
    get scrollStart(){
		const headerHeight = (<HTMLElement>this.$el).offsetHeight;
		const stickyHeight = (<HTMLElement>this.$el.querySelector("#sticky-header")).offsetHeight;

		return headerHeight-stickyHeight;
    }
    
    drawArrow(canvas:HTMLCanvasElement, frame:number, totalFrames:number, height?:number){
        height = typeof height !== 'undefined' ? height : 300;

        //The base level height for background at 0 frame
        const tBase = height/2;

        //The base level height for line at 0 frame
        const aBase = height/3;

        const ctxt = canvas.getContext('2d')!;
        ctxt.clearRect(0, 0, canvas.width, canvas.height);

        ctxt.fillStyle = "#1e1e1e";
        ctxt.fillRect(0, 0, canvas.width, tBase);

        if(frame != totalFrames){
            var tHeight = 2 * tBase - (tBase * frame/totalFrames);
            ctxt.beginPath();
            ctxt.moveTo(0, tBase);
            ctxt.lineTo(tBase, tHeight);
            ctxt.lineTo(tBase*2, tBase);
            ctxt.lineTo(0, tBase);
            ctxt.fill();

            var aHeight = 2 * aBase - (aBase * frame/totalFrames);
            ctxt.beginPath();
            ctxt.strokeStyle = "white";
            ctxt.lineWidth=5;
            ctxt.moveTo(aBase/2, aBase);
            ctxt.lineTo(tBase, aHeight);
            ctxt.lineTo(tBase + aBase, aBase);
            ctxt.stroke();
        }
        else{
            ctxt.beginPath();
            ctxt.strokeStyle = "white";
            ctxt.lineWidth=5;
            ctxt.moveTo(aBase/2, aBase);
            ctxt.lineTo(tBase + aBase, aBase);
            ctxt.stroke();
        }

    }

    slideElem(elem:HTMLElement, frame:number, totalFrames:number){
        console.log(elem, frame, totalFrames);
        const height = elem.offsetHeight;
        //const offset = 0.3 * height;

        if(frame <= 0){
            elem.style.visibility = "hidden";
            elem.style.top = - height + "px";
        }
        else if(frame < totalFrames){
            //var difference = offset + height;
            var position = -(2 * height) + ((height * 2) * frame/totalFrames);
            elem.style.visibility = "visible";
            elem.style.top = position + 'px';
        }
        else{
            elem.style.visibility = "visible";
            elem.style.top = '0';
        }
    }

    scrollAnimation(elem:HTMLElement | HTMLCanvasElement, startNum:number, endNum:number, totalFrames:number,
     animationCallback:(...args: any[])=>void){

        const winTop = window.scrollY;
        if(winTop >= startNum && winTop <= endNum){
            const diff = endNum - startNum;
            const fr = diff/totalFrames;
            let cFrame = Math.ceil((winTop - startNum) / fr);
            /*if(cFrame == 0) {
                cFrame = 1;
            }*/
            
            animationCallback(elem, cFrame, totalFrames)
        }
        else if(winTop > endNum){
            animationCallback(elem, totalFrames, totalFrames);
        }
        else if(winTop < startNum){
            animationCallback(elem, 0, totalFrames);
        }

        return 
    }

    scrollStick(){
        const headerTop = this.scrollStart;
        const winTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if(winTop >= headerTop){
            this.isStuck = true;
        }
        else{
            this.isStuck = false;
        }
    }

    animateArrow() {
        const startNum = 0;
        const endNum = this.scrollStart;
        const totalFrames = 30;
        const canvas = <HTMLCanvasElement>this.$el.querySelector(".tab")!;

        this.scrollAnimation(canvas, startNum, endNum, totalFrames, this.drawArrow)
    }

    animateSlide() {
        const startNum = this.scrollEnd;
        const endNum = this.scrollStart;
        const totalFrames = 30;
        const elem = <HTMLElement>this.$el.querySelector("#sticky-title")!;

        this.scrollAnimation(elem, startNum, endNum, totalFrames, this.slideElem);
    }

    mounted() {
        window.addEventListener('scroll', this.scrollStick);
        window.addEventListener('scroll', this.animateArrow);
        window.addEventListener('scroll', this.animateSlide);
        this.animateArrow();
    }

    destroyed() {
        window.removeEventListener('scroll', this.animateArrow);
        window.removeEventListener('scroll', this.scrollStick);
        window.removeEventListener('scroll', this.animateSlide);
    }
}
</script>

<style scoped lang="scss">
#header{
 height: 92%;
  width: 100%;
  background-color: #1e1e1e;
  position: relative;
}

#header p{
  	color: #962f1d;
}

#main-content{
	width:100%;
	height:800px;
}

#header-content{
	text-align: center;
	width:100%;
	overflow: hidden;
}

#header-content .name-title{
	margin: auto;
	margin-top: 40px;
}

.name-title{
	color: #FFF;
	font-weight: normal;
}

#sticky-title{
	height:60%;
	width: 100%;
	line-height: 50px;
	text-align: center;
	visibility: hidden;
	position: absolute;
	z-index: 15;
}

#sticky-title .name-title{
	margin-top: 10px;
	display: inline-block;
	vertical-align: middle;
	line-height: normal;
}

#sticky-header{
	height: 60px;
	width: 100%;
    background-color: #1e1e1e;
}

.unstuck{
    position: absolute;
    bottom: 0;
    top: auto;
}

.stuck{
    position: fixed;
    top: 0;
    bottom: auto;
}

#sticky-header a{
	color: #fff;
	text-decoration: none;
}

#sticky-header nav{
	bottom: 10px;
	width: 100%;
	position: absolute;
}

#sticky-header nav ul{
	display: flex;
    align-items: stretch; /* Default */
    justify-content: space-between;
    width: 50%;
    margin: auto;
    padding: 0;
}

#sticky-header nav ul li{
	display: block;
    flex: 0 1 auto; /* Default */
    list-style-type: none;
}

.tab{
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 49%;
	margin: auto;
}
</style>