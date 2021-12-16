<template>
<div class="block lg:h-screen grid place-items-center bg-white dark:bg-black dark:bg-opacity-90 dark:text-white dark:duration-300 bg-opacity-80" id="hero-bg">
    <div class="p-4 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center mt-20">
        <div class="grid place-items-center justify-end w-3/4">
            <i class="fas fa-hand-holding-usd text-green-500 text-8xl my-4 animate__animated animate__bounce"></i>
            <h1 class="lg:text-6xl text-4xl sm:w-full text-center animate__animated animate__headShake 
                        font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 p-2">Budgeting made easy</h1>
            <p class="text-center lg:w-1/2 my-8"> Visualizations about your spending habits, goals, and much more without being opinionated.</p>
            
        </div>
        <div class="backdrop-blur-md my-20 border rounded-lg dark:border-gray-500 dark:text-white">
            <div class="border-gray-300 rounded-lg shadow-2xl p-8">
                <h1 class="font-bold text-2xl text-center py-2">Register</h1>
                <p>We budget more so you can budget less!</p>
                <div class="py-6">
                    <div class="py-4">
                        <input 
                        type="text" 
                        name="" 
                        id=""
                        placeholder="Email"
                        class="border-b border-black dark:border-white bg-black bg-opacity-0 w-full p-4">
                    </div>
                    
                    <div class="py-4">
                        <input 
                        type="text"
                        placeholder="Password"
                        class="border-b border-black dark:border-white bg-white bg-opacity-0 w-full p-4">
                    </div>
                    
                </div>
                
                <div class="flex justify-between">
                    <button type="button" class="">Register</button>
                    <button type="button" class="bg-blue-500 p-2 rounded-lg text-white shadow-2xl">Sign in</button>
                </div>
                

            </div>
        </div>
        
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