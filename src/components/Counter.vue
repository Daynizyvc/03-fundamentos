import counter from '@/components/Counter.vue';
<template>
  <h2>{{ customTitle }}</h2>
  <p data-testid="counter">{{ counter }}</p>
  <p>{{ counter }} <sup> 2 </sup> = {{ squareCounted }}</p>
  <div>
    <button @click="increase" class="btn">+</button>
    <button  data-testid="btndec" @click="decrease" class="btn">-</button>
  </div>
</template>

<script>
export default {
  name: "counter-component",
  // props: ['title', 'start'],
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      validator(value) {
        return value > 0;
      },
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
  computed: {
    squareCounted() {
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style>
.btn {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 1rem;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

.btn:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>