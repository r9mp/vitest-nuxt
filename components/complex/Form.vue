<template>
  <div>
    {{ title }}
    {{ description }}
    {{ displayCreateAnother }}
  </div>
</template>

<script setup lang="ts">
import { ComplexFormProps } from '~/components/complex/types';

const props = defineProps<ComplexFormProps>();
const { title, description, displayCreateAnother } = toRefs(props);
</script>
