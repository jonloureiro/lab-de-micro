<template>
  <header :class="$options.name">
    <h2 :class="`${$options.name}__title`">{{ title }}</h2>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'Robotic Rat',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/lib.scss';

.Header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 100%;

  &__title {
    color: $color-primary;
    margin: 0px;
    padding-left: 1rem;
    font-weight: 600;
  }
}
</style>
