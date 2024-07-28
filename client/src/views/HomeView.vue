<script setup>
import WikipediaService from '@/services/WikipediaService';
import { ref } from 'vue';

let bankruptcyInfo = ref('');
let isBankrupt = ref(false);
let commitedFraud = ref(false);
let dataFetched = ref(false);

const getWikiInfo = async () => {
  const url = document.getElementById('wiki-url').value;
  const urlIsValid = validateTextInput(url);
  if(!urlIsValid)  alert('Please enter a valid wikipedia url');
  dataFetched.value = false; // Reset the dataFetched flag
    try {
      const response = await WikipediaService.getPageData({ searchUrl: url });

      bankruptcyInfo.value = response.data.bankruptcyInfo;
      isBankrupt.value = response.data.isBankrupt;
      commitedFraud.value = response.data.commitedFraud;
      dataFetched.value = true;
    } catch (error) {
      console.error("Error fetching Wikipedia data:", error);
      dataFetched.value = false;
    }
};

const validateTextInput = (input) => {
  const pattern = /^https:\/\/en\.wikipedia\.org\/wiki\/.+$/;
  return pattern.test(input);
};

</script>

<template>
  <main class="container">
    <div class="explanation">Please enter the Wikipedia URL of a company into the box below. This tool will then summarise key legal information about the company.</div>
    <input type="text" placeholder="Enter a Wikipedia URL" id="wiki-url">
    <v-btn variant="outlined" @click="getWikiInfo">Submit</v-btn>
    <div class="summary">
      <div v-if="dataFetched" class="boolean">{{ isBankrupt ? 'The company in question may have been bankrupt, please review the information below:' : 'The company in question does not appear to have been bankrupt.' }}</div>
      <div v-if="dataFetched" class="boolean">{{ commitedFraud ? 'The company in question may have been bankrupt, please review the information below:' : 'The company in question does not appear to have been bankrupt.' }}</div>
      <div id="bankruptcy-info">{{ bankruptcyInfo }}</div>
      
    </div>
  </main>
</template>


<style lang="css" scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 2em;

  }

  #explanation {font-weight: bold;}

  #bankruptcy-info {font-style: italic;}
  .boolean { font-weight: bold;}

  .summary {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>