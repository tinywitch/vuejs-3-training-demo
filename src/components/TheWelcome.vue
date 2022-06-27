<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import PiniaIcon from './icons/IconPinia.vue'
import {RouterLink, RouterView} from 'vue-router'

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>
      <RouterLink to="/options-composition">Options API or Composition API</RouterLink>
    </template>
    Includes Options API and Composition API comparison, and choose one is better or at least fit to our situation.

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon/>
    </template>
    <template #heading>
      <RouterLink to="/provide-inject">Provide and Inject</RouterLink>
    </template>
    How I got message from universe
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon/>
    </template>
    <template #heading>
      <RouterLink to="/async-component">Async Components</RouterLink>
    </template>
    Don't make our applications stressfull
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <ToolingIcon/>
    </template>
    <template #heading>
      <RouterLink to="/routing">Vue Routing</RouterLink>
    </template>
    For most Single Page Applications, it's recommended to use the Vue-Router
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <PiniaIcon/>
    </template>
    <template #heading>
      <RouterLink to="/pinia">Pinia</RouterLink>
    </template>
    State Management library and Replacement for Vuex
  </WelcomeItem>


</template>
