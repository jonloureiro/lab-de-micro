<template>
  <div :class="$options.name">
    <Header :class="`${$options.name}__header`"/>
    <main :class="`${$options.name}__main`">
      <Card :class="`${$options.name}__card`">
        <Info v-if="connected" :ip="ip" @fetch-rat="fetchRat"/>
        <Connect v-else :ip="ip" @fetch-rat="fetchRat"/>
      </Card>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Connect from './components/Connect.vue';
import Info from './components/Info.vue';

export default {
  name: 'App',
  components: {
    Header,
    Card,
    Connect,
    Info,
  },
  data() {
    return {
      ip: '',
      connected: false,
      sensor: 0,
    };
  },
  methods: {
    async fetchRat(value) {
      this.ip = value;
      console.log(this.ip);
      try {
        const response = await fetch(`http://${this.ip}/index`);
        console.log(response);
        const obj = JSON.parse(response);
        if (obj.results === 'connected') {
          this.connected = true;
        }
      } catch (error) {
        this.connected = false;
        this.sensor = 0;
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/lib.scss';

body {
  background-color: #fffffd;
}

.App {
  display: grid;
  grid-template-rows: 3.5rem 1fr;

  &__header {
    box-shadow: $my-shadow;
  }

  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__card {
    max-width: 95%;
  }
}
</style>
