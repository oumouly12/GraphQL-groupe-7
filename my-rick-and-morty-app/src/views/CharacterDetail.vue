<template>
  <div>
    <h1>{{ character.name }}</h1>
    <img :src="character.image" :alt="character.name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {},
    };
  },
  mounted() {
    const characterId = this.$route.params.id;
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => response.json())
        .then(data => {
          this.character = data;
        });
  },
};
</script>
<style scoped>
.character-detail {
  text-align: center;
  padding: 20px;
}

.character-detail h1 {
  color: #2c3e50;
}

.character-detail img {
  max-width: 100%;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
