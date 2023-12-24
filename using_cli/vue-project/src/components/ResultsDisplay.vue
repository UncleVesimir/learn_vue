<template >
    <div class="result">
        Your result was: {{ props.result }} ms
    </div>
    <p class="rank">{{rank}}</p>
</template>
<script setup>
    import { ref, onMounted } from 'vue';

 const props = defineProps({
    result: Number
 })

 let rank = ref("");

 onMounted(() => {
    if( props.result < 250) {
        rank.value = "Liquid Ninja"
    } else if (props.result < 400 ) {
        rank.value = "Reflex Warrior"
    } else {
        rank.value = "Snail nibba"
    }
 })
</script>
<style>
    .result {
        color: palevioletred;
    }

    .rank {
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
    
</style>

