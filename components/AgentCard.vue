<template>
  <div class="agent-card" @click="select">
    <img :src="avatarUrl" :alt="agent" class="agent-card__avatar" />
    <div class="agent-card__content">
      <h2 class="agent-card__name">{{ agent }}</h2>
      <p class="agent-card__description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  agent: String,
  avatarUrl: String,
  description: String
});

const emit = defineEmits(['select']);

function select() {
  emit('select', props.agent);
}
</script>

<style scoped>
.agent-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.agent-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.agent-card__avatar {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.agent-card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.agent-card__name {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
}

.agent-card__description {
  font-size: 0.9em;
  color: #777;
}
</style>
