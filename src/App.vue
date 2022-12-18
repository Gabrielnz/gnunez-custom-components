<template>
    <div>
        <hello-vuetify />
        <hello-tailwind />
    </div>
</template>

<script lang="ts">
import HelloVuetify from './components/HelloVuetify.vue';
import HelloTailwind from './components/HelloTailwind.vue';

export default {
    components: {
        HelloVuetify,
        HelloTailwind
    }
}
</script>