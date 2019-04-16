<template>
  <div :class="$options.name">
    <div :class="`${$options.name}__wrapper`">
      <img src="../assets/svg/baseline-brightness_5-24px.svg" width="22" height="22">
      <h3 :class="`${$options.name}__title`">
        Sensor: {{ sensor }}
      </h3>
    </div>
    <button v-on:click="forward" :class="`${$options.name}__button`">
      <img src="../assets/svg/baseline-arrow_upward-24px.svg" width="32" height="32">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: ['ip'],
  created() {
    this.fetchSensor();
    this.timer = setInterval(this.fetchSensor, 5000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  data() {
    return {
      sensor: -1,
      timer: '',
    };
  },
  methods: {
    async forward() {
      console.log('teste');
    },
    async fetchSensor() {
      console.log();
      try {
        const response = await fetch(`http://${this.ip}/sensor`);
        console.log(response);
        const obj = JSON.parse(response);
        if (obj.results >= 0) {
          this.sensor = obj.results;
        }
      } catch (error) {
        this.sensor = 0;
        this.$emit('fetch-rat', this.ip);
        console.log(error);
      }
    },
    async getForward() {
      console.log('kdsopkds');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/lib.scss';

.Info {
  display: flex;
  flex-flow: column nowrap;

  &__title {
    color: $color-primary;
    font-weight: 600;
    margin: 0 0 0.75rem;
    padding-left: 0.25rem;
  }

  &__wrapper {
    display: flex;
  }

  &__button {
    border: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
    background: $color-active;
    text-decoration: none;
    padding: 0.5rem;
    cursor: pointer;
    align-self: center;
  }
}
</style>
