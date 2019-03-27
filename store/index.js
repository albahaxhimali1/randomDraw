import playersMock from '@/mocks/players';
import Helper from '@/helpers/functions';

export const state = () => ({
  players: playersMock,
  registering: true
});

export const mutations = {
  addNewPlayer (state, player) {
    player.id = Helper.generateUUID()
    state.players = [
      ...state.players,
      player
    ];
  },
  finishRegister (state) {
    state.registering = false
  }
};

