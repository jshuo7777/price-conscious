import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Comparison from '../Comparsion.vue';

describe('Comparison', () => {
    test('adds a new item when "Add Item" button is clicked', async () => {
      const wrapper = mount(Comparison);
      const addItemButton = wrapper.find('.add-item-btn');
      expect(wrapper.findAll('.item-container')).toHaveLength(2);
  
      await addItemButton.trigger('click');
  
      expect(wrapper.findAll('.item-container')).toHaveLength(3);
    });
});
