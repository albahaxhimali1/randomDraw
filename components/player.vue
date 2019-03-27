<template>
  <div class="persons-container player">
    <div class="names-holder">
      <div class="name-wrapper" >{{player.name}}</div>
      <!--<div class="name-wrapper" :style="{backgroundColor: person.selected ? '#bdc3c7' : ''}">{{person.name}}</div>-->
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'player',
    props: ['player']
  }
</script>
<style lang="scss">

</style>
