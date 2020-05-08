<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="400">
      <g v-for="(value, i) in chartData" :key="value" :transform="`translate(0, ${i * 40}`">
        <rect width="100" height="30" fill="#f0b375" :y="i * 40" />
        <text :y="i * 39">{{ value }}</text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: [5, 8, 20, 3, 17, 14],
      width: 100,
      height: 30,
      x: 10,
      y: 10
    };
  }
};
</script>

<style>
</style>