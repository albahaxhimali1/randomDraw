<template>
  <div class="all-persons-container">
    <register-players v-show="registering"></register-players>
    <div class="button-holder">
      <button @click="randomPersons">Start</button>
    </div>
    <div class="names-container">
      <player-component
        v-for="(player, index) in players"
        :key="`${player.id}-${index}`"
        :player="player"
      ></player-component>
    </div>
    <div class="names-holder versus-container">
      <div class="versus-holder">
        <div class="name-wrapper">{{this.firstRandomPerson.name}}</div>
        <h2>VS</h2>
        <div class="name-wrapper">{{this.secondRandomPerson.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash';
  import { mapState } from 'vuex';
  import PlayerComponent from '@/components/player';
  import RegisterPlayers from '@/components/registerPlayers';

  export default {
    components: {
      PlayerComponent,
      RegisterPlayers
    },
    computed: {
      ...mapState(['players', 'registering'])
    },
    data () {
      return {
        firstRandomPerson: '',
        secondRandomPerson: ''
      }
    },
    methods: {
      randomPersons() {
        let clonedPersons = this.players.filter(item => item.selected === false)
        if (clonedPersons.length > 1) {
          const randomIndex1 = Math.floor(Math.random() * clonedPersons.length);
          this.firstRandomPerson = clonedPersons[randomIndex1];
          let personIndex = this.players.findIndex(el => el.id === this.firstRandomPerson.id);
          this.players[personIndex].selected = true;

          clonedPersons = this.players.filter(item => item.selected === false)
          const randomIndex2 = Math.floor(Math.random() * clonedPersons.length);
          this.secondRandomPerson = clonedPersons[randomIndex2];
          personIndex = this.players.findIndex(el => el.id === this.secondRandomPerson.id);
          this.players[personIndex].selected = true;
        }
      }
    }
  }
</script>
<style lang="scss">
  .button-holder {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      background: #3989c6;
      color: #f7f8fb;
      border-radius: 8px;
      border: none;
      padding: 10px 35px;
      outline: none;
      cursor: pointer;
      -webkit-transition: all .3s;
      -moz-transition: all .5s;
      -ms-transition: all .5s;
      -o-transition: all .5s;
      transition: all .5s;

      &:hover {
        background: darken(#3989c6, 10%);
      }
    }
  }
</style>
