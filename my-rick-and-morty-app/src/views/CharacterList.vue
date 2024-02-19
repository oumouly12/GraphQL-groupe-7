<template>
  <div>
    <h1>Character List</h1>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <router-link :to="'/character/' + character.id">
          <img :src="character.image" :alt="character.name" />
          {{ character.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
          this.characters = data.results;
        });
  },
};
</script>
