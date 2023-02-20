<script setup lang="ts">
// useHead({
//   title: 'about',
//   meta: [
//     { name: 'description', content: 'My amazing site.' },
//   ],
//   bodyAttrs: {
//     class: 'test',
//   },
//   script: [{ children: 'console.log(\'Hello world\')' }],
// })
// @ts-nocheck
const title = ref('Hello World')
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>
    <Icon name="clarity:accessibility-2-line" />
    <h2>about</h2>
  </div>
</template>
