<template>
  <div :class="$options.name">
    <h3 :class="`${$options.name}__title`">{{ message }}</h3>
    <form :class="`${$options.name}__form`" @submit="fetchRat">
      <input
        :class="`${$options.name}__input`"
        v-model="val"
        type="text"
        placeholder="Insira o IP"
        required
      >
      <input
        :class="`${$options.name}__button`"
        type="submit"
        value="Conectar"
      >
    </form>
  </div>
</template>

<script>
export default {
  name: 'Connect',
  props: ['ip'],
  created() {
    this.val = this.ip;
  },
  data() {
    return {
      message: 'Connect your rat',
      input: '',
    };
  },
  methods: {
    fetchRat(e) {
      e.preventDefault();
      this.$emit('fetch-rat', this.val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/lib.scss';

.Connect {
  &__title {
    color: $color-primary;
    font-weight: 600;
    margin: 0 0 0.75rem;
  }

  &__form {
    display: flex;
    flex-flow: column nowrap;
  }

  &__input {
    width: 100%;
    margin-bottom: 0.75rem;
  }

  &__button {
    border: 0;
    border-radius: 0.25rem;
    background: $color-active;
    color: #fff;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    align-self: flex-end;
  }

}
</style>
