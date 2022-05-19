<template>
  <div id="app">
  <div class="gallery">
    <div class="gallery-panel"
         v-for="(image, i) in images"
        :key="i">
      <img :src="image.url" />
    </div>
  </div>
    </div>
</template>


<script>
import axios from "axios";

export default {
  name: "app",
  data: () => ({
    images: []
  }),
  methods: {
    getCats() {
      this.images = [];
      axios
        .get(
          `https://api.thecatapi.com/v1/images/search?limit=25&page=1?size=med`,
          {
            headers: {
              "x-api-key": "dcaf8f74-e81e-4fe5-ad0b-ee1e7ecbc6c4"
            }
          }
        )
        .then(response => {
          this.images = response.data;
          console.log(response);
        })
        .catch(() => {
          this.images = [];
        });
    }
  },
  beforeMount(){
    this.getCats()
 }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 101vh;
  max-width: 99vw;
  width: 99vw;
  height: 101vh;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}
.btn {
  font-size: 18px;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
}
.btn:not(:last-child) {
  margin-right: 10px;
}

.gallery {
  line-height: 0;
  -webkit-column-count: 5;
  -webkit-column-gap:   0px;
  -moz-column-count:    5;
  -moz-column-gap:      0px;
  column-count:         5;
  column-gap:           0px;
  max-height: 101vh;
  max-width: 99vw;
  width: 99vw;
  height: 101vh;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  flex-flow: column wrap;
  overflow: hidden;
}

.gallery-panel img {
  width: 100% !important;
  height: auto !important;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
}

img {
    max-width: 100%;
    height: auto;
    width: auto\9; /* ie8 */
}

@media (max-width: 1200px) {
  .gallery {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
@media (max-width: 1000px) {
  .gallery {
  -moz-column-count:    3;
  -webkit-column-count: 3;
  column-count:         3;
  }
}
@media (max-width: 800px) {
  .gallery {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}
@media (max-width: 400px) {
  .gallery {
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:         1;
  }
}
</style>