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

#projectList {
  outline: solid thin black;
  padding: 5%;
  margin-top: 2%;
}
</style>
