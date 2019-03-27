<template>
  <div class="all-persons-container">
    <div class="button-holder">
      <button @click="randomPersons">Start</button>
    </div>
    <div class="names-container">
      <div class="persons-container" v-for="person in persons" :key="person.id">
        <div class="names-holder">
          <div class="name-wrapper" :style="{backgroundColor: person.selected ? '#bdc3c7' : ''}">{{person.name}}</div>
        </div>
      </div>
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
  import _ from 'lodash'
  export default {
    data () {
      return {
        persons: [
          {  id: 1,
            name: 'Alba',
            selected: false
          },
          {  id: 2,
            name: 'Xhuljo',
            selected: false
          },
          {  id: 3,
            name: 'Kristina',
            selected: false
          },
          {  id: 4,
            name: 'Gersi',
            selected: false
          },
          {  id: 5,
            name: 'Valdio',
            selected: false
          },
          {  id: 6,
            name: 'Eni',
            selected: false
          },
          {  id: 7,
            name: 'Ergi',
            selected: false
          },
          {  id: 8,
            name: 'Erisa',
            selected: false
          },
          {  id: 9,
            name: 'Benn',
            selected: false
          }
        ],
        firstRandomPerson: '',
        secondRandomPerson: ''
      }
    },
    methods: {
      randomPersons() {
        let clonedPersons = this.persons.filter(item => item.selected === false)
        if (clonedPersons.length > 1) {
          const randomIndex1 = Math.floor(Math.random() * clonedPersons.length);
          this.firstRandomPerson = clonedPersons[randomIndex1];
          let personIndex = this.persons.findIndex(el => el.id === this.firstRandomPerson.id);
          this.persons[personIndex].selected = true;

          clonedPersons = this.persons.filter(item => item.selected === false)
          const randomIndex2 = Math.floor(Math.random() * clonedPersons.length);
          this.secondRandomPerson = clonedPersons[randomIndex2];
          personIndex = this.persons.findIndex(el => el.id === this.secondRandomPerson.id);
          this.persons[personIndex].selected = true;
        }
      }
    }
  }
</script>
