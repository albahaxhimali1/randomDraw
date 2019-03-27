<template>
  <div class="register-players">
    <h3>Register Players</h3>
    <form @submit="addPlayer">
      <input type="text" v-model="newPlayerName">
      <button type="submit">Add</button>
    </form>
    <div class="list-players">
      <player-component
        v-for="player in players"
        :key="player.id"
        :player="player"
      ></player-component>
    </div>
    <button class="done-button" @click="finishRegister">Done! Let's Play :)</button>
  </div>
</template>
<script type="text/babel">
  import { mapMutations, mapState } from 'vuex';
  import PlayerComponent from '@/components/player';

  export default {
    name: 'registerPlayers',
    components: {
      PlayerComponent
    },
    computed: {
      ...mapState(['players'])
    },
    data () {
      return {
        newPlayerName: ''
      }
    },
    methods: {
      ...mapMutations(['addNewPlayer', 'finishRegister']),
      addPlayer (e) {
        e.preventDefault();
        this.addNewPlayer({name: this.newPlayerName});
        this.newPlayerName = '';
      }
    }
  }
</script>
<style lang="scss">
  .register-players {
    width: 60%;
    height: 80%;
    overflow-y: scroll;
    position: fixed;
    top: 10%;
    left: 20%;
    right: 20%;
    bottom: 10%;
    background: #121c14;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    padding: 25px;
    -webkit-box-shadow: inset 0px 0px 97px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 97px -7px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 97px -7px rgba(0,0,0,0.75);

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      color: #fcba4a;
      font-size: 38px;
      margin-bottom: 20px;
    }

    form {
      width: 80%;
      display: flex;
      justify-content: center;

      input[type=text] {
        text-align: center;
        border-radius: 12px;
        font-weight: bold;
        border: 4px solid #353944;
        padding: 10px;
        width: 400px;
        background: rgba(255, 255, 255, .9);
        cursor: pointer;
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        -ms-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
        margin-right: 10px;
        font-size: 18px;
      }

      input:focus {
        outline: 0;
        background: rgba(255, 255, 255, 1);
      }

      button {
        background: #3D88BF;
        color: #fff;
        font-weight: bold;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
        border: 0;
        padding: 0 40px;
        height: 40px;

        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        -ms-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;

        &:hover {
          background: lighten(#3D88BF, 10%);
          cursor: pointer;
        }
      }
    }

    button.done-button {
      background: #e7503b;
      color: #fff;
      font-size: 18px;
      border: 4px solid #353944;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
      padding: 10px 20px 10px 20px;
      -webkit-transition: all .3s;
      -moz-transition: all .3s;
      -ms-transition: all .3s;
      -o-transition: all .3s;
      transition: all .3s;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background: darken(#e7503b, 5%);
      }
    }

    .list-players {
      width: 100%;
      padding: 20px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
