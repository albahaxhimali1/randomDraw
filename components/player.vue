<template>
  <div class="persons-container player">
    <div class="names-holder">
      <div class="name-wrapper" :style="{backgroundColor: player.selected ? '#bdc3c7' : ''}">
        <img src="~/static/star-solid.svg" alt="star-solid-fontawesome" class="star-player">
        {{player.name}}
        <img src="~/static/star-solid.svg" alt="star-solid-fontawesome" class="star-player">
      </div>
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
  .star-player {
    width: 20px;
    height: auto;
    margin: 0 5px;
  }

  .persons-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .names-holder {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      margin-bottom: 20px;

      .name-wrapper {
        width: 200px;
        padding: 10px 0;
        background: #e7503b;
        color: #fff;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 12px;
        font-weight: bold;
        border: 4px solid #353944;
      }

      h2 {
        font-size: 30px;
        color: #1B1B1B;
      }
    }
  }
</style>
