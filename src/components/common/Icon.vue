<template>
  <Icon :icon="icon" :inline="true" />
</template>
<script setup>
import { Icon } from "@iconify/vue";
defineProps(["icon"]);
</script>
