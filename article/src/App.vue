<template>
  <div id="app">
    <child-component></child-component>
    <comp-article></comp-article>
  </div>
</template>

<script>
import ChildComponent from "./components/ChildComponent.vue"
import CompArticle from "./components/CompArticle.vue"

export default {
  name: 'App',
  components: {
    "child-component" : ChildComponent,
    "comp-article" : CompArticle
  }
}
</script>

<style>

</style>
