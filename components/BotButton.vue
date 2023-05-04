<template>
    <button class="bot-button" :class="{'active': isActive}" @click="handleClick">
      <img :src="imageSrc" alt="bot avatar">
    </button>
  </template>
  
  <script>
  export default {
    props: {
      botId: {
        type: String,
        required: true
      },
      isActive: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      imageSrc() {
        return `/bot${this.botId}.png`
      }
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  }
  </script>
  
  <style>
  .bot-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: #fff;
    border: 3px solid #f8f8f8;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  .bot-button.active {
    border-color: #0f0;
  }
  
  .bot-button img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
  </style>
  