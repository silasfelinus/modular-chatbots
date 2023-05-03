<script lang="ts" setup>
import { Message, User } from '../types'

const props = defineProps < {
    user?: User
    message: Message
}>()

const relativeTime = 
</script>

<template>
    <div class="chat">
        <div class="chat-image avatar"><img src="user?.avatar" /></div>
        <div class="chat-header"></div>
        <div class="chat-bubble bg-white dark:bg-gray-900 max-w-max w-full"></div>
        {{  message.text  }}
    </div>
</template>