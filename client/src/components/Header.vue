<template>
  <header>
    <img :src="image">
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
        image: require('@/assets/logo.png')
    };
  }
};
</script>

<style scoped>
img {
  width: 300px;
}

@media (max-width: 700px) {
    img {
        display: block;
        margin: auto;
    }
}
</style>