<template>
  <div id="app">
    <h1>
      Graduate of Stevens Institute of Technology (2019) and current software developer at
      <a class="highlight" href="https://www.sphereco.com/">Sphere Technology Solutions</a>. Casual Minecraft player,
      movie watcher, and music listener <a class="highlight" href="https://open.spotify.com/playlist/7zSUBKPAL7VYU2ybmXSf3t">\m/</a>.
    </h1>
    <Projects projects=""/>
    <h1>
      You're always welcome to contact me at the following
    </h1>
    <div class="footer">
      <a :href="pdf" target="_blank">
        <img class="external" title="Resume" src="./assets/resumeIcon.png" alt="Resume icon">
      </a>
            
      <a class="externalLinks" href="https://github.com/rzhou10" target="_blank" rel="noopener noreferrer">
        <img class="external" title="Github" src="./assets/github_logo.png" alt="Github logo">
      </a>

      <a class="externalLinks" href="https://www.linkedin.com/in/rzhou10/" target="_blank" rel="noopener noreferrer">
        <img class="external" title="LinkedIn" src="./assets/linkedin_logo.png" alt="LinkedIn logo">
      </a>
    </div>

    <h3 class="footer"> {{ time }} </h3>

    <div class="footer">
      <h3>Website name taken from the song Black Marten's Trace by Kalmah.</h3>
    </div>

  </div>
</template>

<script>
import Projects from './components/Projects.vue';
import pdf from './pdfs/resume.pdf';

export default {
  name: 'App',
  components: {
    Projects
  },
  data() {
    return {
      time: '',
      pdf: pdf
    }
  },
  mounted() {
    this.loadTime();
  },
  methods: {
    loadTime(){
      return setInterval(this.getDate, 1000);
    },
    getDate(){
      let completeDate = new Date();
      let hour = completeDate.getHours();
      let minute = completeDate.getMinutes();
      let seconds = completeDate.getSeconds();
      let month = completeDate.getMonth();
      let day = completeDate.getDate();
      let year = completeDate.getFullYear();
      let listOfMonths = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
      ];
      this.time = "Today is: " + listOfMonths[month] + " " + day + ", " + year + ", " +
        this.padZeros(hour) + ":" + this.padZeros(minute) + ":" + this.padZeros(seconds);
    },
    padZeros(padding){
      if (padding < 10){
          padding = "0" + padding;
      }
      return padding;
    }
  }
}
</script>

<style>
html * {
  font-family: "Advent Pro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 78%;

  margin-left: auto; 
  margin-right: auto;

  letter-spacing: 0.1em;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

h1 {
  margin-top: 5em;
  text-align: center;
}

.highlight {
  text-decoration: none;
}

.highlight:hover {
  background-color: yellow;
}

.footer {
  padding-top: 2em;
}

.externalLinks {
  padding-left: 6em;
}

img {
  max-width: 35px;
  max-height: 35px;
  width: auto;
  height: auto
}

</style>
