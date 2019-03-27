<template>
  <div class="all-persons-container">
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

  export default {
    components: {
      PlayerComponent
    },
    computed: {
      ...mapState({
        players: state => state.players
      })
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
