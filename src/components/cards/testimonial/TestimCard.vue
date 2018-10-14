<template>
    <figure class="snip1204">
        <blockquote> {{testimContent.quote}} </blockquote>
        <div class="author">
            <img :src="testimContent.author.img" alt="sq-sample7"/>
            <h5>{{testimContent.author.name}}</h5><span>{{testimContent.author.description}}</span>
        </div>
    </figure>
</template>

<script>
export default {
    props: ['testimContent']
}
</script>

<style lang="scss" scoped>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,800);

figure.snip1204 {
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  float: left;
  overflow: hidden;
  min-width: 220px;
  max-width: 100%;
  width: 100%;
  color: #333;
  text-align: left;
  box-shadow: none !important;
}
figure.snip1204 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
figure.snip1204 img {
  max-width: 100%;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 5px;
  display: block;
  z-index: 1;
  position: absolute;
  right: 50%;
}
figure.snip1204 blockquote {
  margin: 0;
  display: block;
  border-radius: 8px;
  position: relative;
  background-color: #fafafa;
  padding: 30px 50px 65px 50px;
  font-size: 0.8em;
  font-weight: 500;
  margin: 0 0 -40px;
  height: 275px;
  line-height: 1.6em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
figure.snip1204 blockquote:before,
figure.snip1204 blockquote:after {
  font-family: 'FontAwesome';
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
}
figure.snip1204 blockquote:before {
  top: 35px;
  left: 20px;
}
figure.snip1204 blockquote:after {
  content: "\201D";
  right: 20px;
  bottom: 35px;
}
figure.snip1204 .author {
  margin: 0;
  height: 80px;
  display: block;
  text-align: left;
  color: #ffffff;
  padding: 0 35px;
  position: relative;
}
figure.snip1204 .author h5,
figure.snip1204 .author span {
  left: 50%;
  position: absolute;
  opacity: 0.8;
  padding: 3px 5px;
}
figure.snip1204 .author h5 {
  text-transform: uppercase;
  bottom: 50%;
  margin: 0;
  font-weight: 800;
  color: #000000;
}
figure.snip1204 .author span {
  font-size: 0.8em;
  color: #000000;
  top: 50%;
}

@media (max-width: 900px) {
  figure.snip1204 {
    margin: 3% 1%;
  }
}

</style>
