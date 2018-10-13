<template>
  <div id="videohero">
    <video class="video is-hidden-mobile" muted autoplay loop>
        <source :src="video" type='video/mp4'>
    </video>
    <div class="content">
        <VideoHeroContent/>
    </div>
  </div>
</template>

<script>
import VideoHeroContent from '@/components/heroes/VideoHeroContent'
/* eslint-disable */
export default {
   components: {
       VideoHeroContent
   },
   data () {
       return {
           video: require('@/assets/videos/video1.mp4')
       }
   }
}
</script>

<style scoped lang="scss">
.content {
    position: absolute;
    top: $video-hero-height/3;
    z-index: 20;
    width: 100%;
}
#videohero {
    width: 100%;
    height: $video-hero-height;
    overflow: hidden; 
    background-image: url('../../assets/images/rickmorty.jpg');
    background-size: cover;
    position: relative;
}
.video {
    width: 100%;
    object-fit: cover;
}
 @media only screen and (min-width: 1024px) {
   #videohero {
        background-image: none;
   }
}
@media only screen and (max-width: 1023px) {
    video {
        display: none;
    }
}
</style>