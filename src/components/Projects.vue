<template>
  <div class="projects">
    <h1>Check out some stuff I've made!</h1>
    <div
      v-for="project in projects"
      id='projectList'
      :key="project.id"
    >
      <h2>
        <a
          :href="project.link"
        >
          {{ project.name }}
        </a>
      </h2>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    projects: {
      type: Array
    }
  }
}
</script>

<style scoped>
a {
  color: blue;
  text-decoration: none;
}

a:hover {
  background-color: yellow;
}

h2 {
  text-shadow: 1px;
}

#projectList {
  border: solid thin black;
  padding: 8%;
  margin-top: 5%;
  box-shadow: 10px 10px;
  border-radius: 10px;
}
</style>
