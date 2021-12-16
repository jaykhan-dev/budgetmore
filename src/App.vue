<script>
import Footer from './components/footer.vue'
import Hero from './components/hero.vue'
import Point1 from './components/point1.vue'
import Point2 from './components/point2.vue'
import Point3 from './components/point3.vue'
import Plaid from './components/plaid.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Hero,
    Point1,
    Point2,
    Point3,
    Plaid
  },
  data() {
    return {
      isDark: false
    }
  },
}
</script>

<template>
<div :class="isDark ? 'dark' : ''">
<div class="h-16 bg-gradient-to-r from-black to-gray-900 flex justify-between items-center fixed top-0 w-full z-10">
    <div class="p-4">
        <h1 class="dark:text-white font-bold text-2xl text-green-600">Budgetmore</h1>
    </div>
    <div class="p-4">
        <button type="button" 
        @click="isDark = !isDark"
        class="p-2 text-white text-2xl">
            <i class="fas fa-moon"></i>
        </button>
    </div>
</div>

  <Hero />
  <Point1 />
  <Point2 />
  <Point3 />
  <Plaid />
  <Footer />

  </div>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500;700&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
}
h1 {
  font-weight: 200;
}
</style>
