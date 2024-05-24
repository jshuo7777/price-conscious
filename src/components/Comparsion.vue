<template>
    <div>
      <h1>This is a Comparison page</h1>
      <div>
        <label>Shop Name:</label>
        <input type="text" v-model="shopName">
      </div>
      <div v-for="(item, index) in items" :key="index" class="item-container">
        <h2>Item {{ item.name || index + 1 }}</h2>
        <div class="name-input">
          <label>Item Name:</label>
          <input type="text" v-model="item.name">
        </div>
        <div>
          <label>Weight (in grams):</label>
          <input type="number" v-model="item.weight">
        </div>
        <div>
          <label>Price ($):</label>
          <input type="number" v-model="item.price">
        </div>
        <p v-if="item.weight !== null && item.price !== null">Price per gram: ${{ pricePerGram(item) }}/g</p>
        <button @click="deleteItem(index)">Delete Item</button>
        <button v-if="shouldShowUploadButton[index] && shopName !== null" @click="upload(index)">Upload</button>
      </div>
      <!-- Only show the "Add Item" button below the last item -->
      <button @click="addItem">Add Item</button>
      <div v-if="items.length >= 2">
        <h2>Comparison Result:</h2>
        <p>{{ compareItems }}</p>
      </div>
    </div>
  </template>
  
  <style>
  .item-container {
    margin-bottom: 20px;
  }
  
  .name-input {
    display: block;
  }
  </style>
  
  <script setup>
  import { ref, computed } from 'vue';
  const shopName = ref('');
  
  const items = ref([{ name: '', weight: null, price: null }, { name: '', weight: null, price: null }]);
  
  const pricePerGram = (item) => {
    return (item.price / item.weight).toFixed(2);
  }
  
  const compareItems = computed(() => {
    const validItems = items.value.filter(item => item.weight !== null && item.price !== null);
    if (validItems.length >= 2) {
      const pricePerUnitWeights = validItems.map(item => pricePerGram(item));
      const minPrice = Math.min(...pricePerUnitWeights);
      const maxPrice = Math.max(...pricePerUnitWeights);
      if (minPrice === maxPrice) {
        return 'All items have the same value for money.';
      } else {
        const minIndices = [];
        const maxIndices = [];
        
        // Find the indices of items with minimum and maximum prices
        pricePerUnitWeights.forEach((price, index) => {
          if (Number(price) === minPrice) minIndices.push(validItems[index].name || index + 1);
          if (Number(price) === maxPrice) maxIndices.push(validItems[index].name || index + 1);
        });
        return `Item ${minIndices.join(', ')} have the best value, and Item ${maxIndices.join(', ')} have the worst value.`;
      }
    } else {
      return 'Please enter weight and price for at least two items.';
    }
  });
  
  const addItem = () => {
    items.value.push({ name: '', weight: null, price: null });
  }
  
  const deleteItem = (index) => {
    items.value.splice(index, 1);
  }
  
  const shouldShowUploadButton = computed(() => {
    // Check if the current item has non-null values for weight and price
    return items.value.map(item => item.weight !== null && item.price !== null);
  });
  
  const upload = (index) => {
    const item = items.value[index];
    alert(`Shop Name: ${shopName.value}\nItem Name: ${item.name}, Weight: ${item.weight}, Price: ${item.price}`);
  }

  
  </script>
  