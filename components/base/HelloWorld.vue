<template>
  <p>{{ message }}</p>
</template>

<script setup lang="ts">
import { BaseHelloWorldProps } from './types';

const props = defineProps<BaseHelloWorldProps>();
const { message } = toRefs(props);
</script>
