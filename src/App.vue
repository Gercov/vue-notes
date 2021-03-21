<template>
  <Header class = "header" />
  <Input class = "input"
    @addNote="onaddNote"
  />
  <template
    v-if="notes.length"
  >
    <place-for-item />
    <template
      v-for="(note, index) in notes"
      :key="index"
    >
      <item
        :head="note.header"
        :maintext="note.main"
        :date="note.date"
        @delete="notes.splice(index, 1)"
      >
      </item>
    </template>
  </template>
</template>

<script>
import Header from "./components/Header.vue";
import Item from './components/Item.vue';
import Input from './components/Input.vue';
import PlaceForItem from './components/PlaceForItem.vue';

export default {
  components: {
    Header,
    Input,
    PlaceForItem,
    Item,
  },
  name: "App",
  data() {
    return {
      seenNotes: false,
      notes: []
    }
  },
  methods: {
    onaddNote(data) {
      this.notes.unshift(data)
    }
  }
};
</script>

<style>
  .container {
    width: 900px;
  }

  *:hover,
  *:focus,
  *:active
  {
    outline: none;
    box-shadow: none !important;
    -webkit-appearance: none;
  }

  @media (max-width: 560px) {
    .container {
      width: 350px;
    }
  }
</style>

<style scoped>
  .header {
    margin-bottom: 30px;
  }

  .input {
    margin-bottom: 90px;
  }
</style>