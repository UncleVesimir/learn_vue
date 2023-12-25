<template>
    <div v-if="showBlock" class="block" @click="handleClick">
        Click Me!
    </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue';

let showBlock = ref(false);
let timer = null;
let reactionTime = 0;

const props = defineProps({
    delay: Number
});

const emits = defineEmits(["stopGame"]);

const startTimer = () => {
    timer = setInterval(() => {
        reactionTime += 10
    }, 10);
}

onMounted(() => {
    setTimeout(() => {
        showBlock.value = true;
        startTimer();
    }, props.delay)
});

const handleClick = () => {
    clearInterval(timer);
    emits("stopGame", [reactionTime]);
}

</script>

<style scoped>
.block {
    display: block;
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>