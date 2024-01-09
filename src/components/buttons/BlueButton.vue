import { RouterLink } from 'vue-router';
<template>
    <RouterLink :to="buttonLink" class="text-white font-bold bg-blue-700">
        {{ buttonText  }}
    </RouterLink>
</template>

<script>
export default {
  name: 'BlueButton',
props: {
    buttonLink: String,
    buttonText: String,
}
}
</script>