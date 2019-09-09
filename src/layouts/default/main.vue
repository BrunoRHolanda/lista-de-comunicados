<template>
  <VApp id="inspire">
    <VResponsive :aspect-ratio="16/9">
      <div>
        <VAppBar
          class="app-bar"
          dark
        >
          <VAppBarNavIcon />

          <VToolbarTitle>{{ titulo }}</VToolbarTitle>

          <div class="flex-grow-1" />
          <VBtn icon>
            <VIcon>mdi-magnify</VIcon>
          </VBtn>
        </VAppBar>
      </div>
      <VContainer>
        <router-view />
      </vcontainer>
    </VResponsive>
  </VApp>
</template>

<script>
/**
    Copyright 2019 Bruno R. Holanda

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

export default {
    name: 'DefaultLayout',
    data () {
        return {
            titulo: document.title,
        };
    },
    methods: {}
};
</script>

<style lang="scss">
  .app-bar {
    background: #660099 !important;
    box-shadow: none !important;
  }
</style>
