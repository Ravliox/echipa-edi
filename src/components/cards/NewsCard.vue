<template>
  <div class = "article">
  	<div class = "content">
      <div class = "img-container">
        <img :src="newsArticle.img" :alt="newsArticle.text">
      </div>
      <div class = "content-header">
        <div class="level">
          <div class="level-left">
            <h1>{{newsArticle.header}}</h1>
          </div>
          <div class="level-right">
            <h1>{{newsArticle.date}}</h1>
          </div>
        </div>
      </div>
      <div class = "content-text">
        <p>{{newsArticle.text}}</p>
      </div>
		</div>
  </div>
</template>

<script>
export default{
  name: 'NewsArticle',
  props: [
    'newsArticle'
  ],
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
img{
	width: 100%;
	display: inline-block;
	transform: translateY(10px);
  margin-top: 0;
  object-fit: cover;
}

h1 {
  color: #fff;
}

.img-container{
	max-height: 250px;
	overflow: hidden;
}

h1 {
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.content{
  padding:5%;
}

.content-text{
  background-color: $fade-color;
  min-height: 10%;
  overflow: hidden;
  padding: 20px;
}

.content-header {
  background-color: $primary-color;
}

p{
  text-align: justify;
}
</style>

