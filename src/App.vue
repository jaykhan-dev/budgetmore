<script>
import Navigation from './components/navigation.vue'
import Footer from './components/footer.vue'
import Hero from './components/hero.vue'
import Point1 from './components/point1.vue'
import Point2 from './components/point2.vue'
import Point3 from './components/point3.vue'
import Plaid from './components/plaid.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Footer,
    Hero,
    Point1,
    Point2,
    Point3,
    Plaid
  },
  data() {
    return {
      isDark: true
    }
  },
}
</script>

<template>


  <Navigation />
  <Hero />
  <Point1 />
  <Point2 />
  <Point3 />
  <Plaid />
  <Footer />


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
