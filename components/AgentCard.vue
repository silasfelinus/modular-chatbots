<template>
  <card-generic :title="agent">
    <img :src="avatarUrl" alt="Agent Avatar" class="w-full h-auto" />
    <p>{{description}}</p>
  </card-generic>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardGeneric from "./CardGeneric.vue";

export default defineComponent({
  components: {
    CardGeneric,
  },
  props: {
    agent: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>
