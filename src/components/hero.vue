<template>
<div class="h-screen grid place-items-center bg-black text-white bg-opacity-90" id="hero-bg">
    <div class="p-4 grid place-items-center">
        <i class="fas fa-hand-holding-usd text-green-500 text-8xl my-8 animate__animated animate__bounce"></i>
        <h1 class="lg:text-8xl text-4xl sm:w-full text-center animate__animated animate__headShake 
                    text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 p-4">Budgeting made easy</h1>
        <p class="text-center w-1/2 my-8 text-white"> Visualizations about your spending habits, goals, and much more without being opinionated.</p>
        <button type="button" class="p-4 rounded-full border border-gray-700 bg-gradient-to-r from-blue-400 to-blue-500 
                    text-2xl font-bold uppercase text-white shadow-2xl hover:translate-x-2 duration-300
                    animate-pulse">Get Started</button>
    </div>
</div>
</template>

<script>

</script>

<style>

#hero-bg {
    background-image: url('../assets/viz.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: overlay;


}
</style>