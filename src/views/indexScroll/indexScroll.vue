<template>
  <div class="indexScroll">
    <LeftIS></LeftIS>
    <RightIS></RightIS>
  </div>
</template>

<script>
  import LeftIS from './leftIS';
  import RightIS from './rightIS';
  
  export default {
    name: "indexScroll",
    components: {
      LeftIS, RightIS
    }
  }
</script>

<style>

</style>
