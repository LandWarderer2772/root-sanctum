<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const gitHubPath = computed(() => {
  if (!page.value.filePath) return ''
  return `https://github.com/LandWarderer2772/root-sanctum/blob/main/docs/${page.value.filePath}`
})

const isIndexPage = computed(() => {
  return page.value.filePath?.endsWith('index.md') || page.value.filePath === 'index.md'
})
</script>

<template>
  <div v-if="!isIndexPage" class="doc-footer">
    <p>
      <a :href="gitHubPath" target="_blank" rel="noopener">Contribute to this page</a>
    </p>
  </div>
</template>

<style scoped>
.doc-footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.doc-footer a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.doc-footer a:hover {
  text-decoration: underline;
}
</style>
