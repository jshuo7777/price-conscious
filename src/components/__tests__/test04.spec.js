import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Comparison from '../Comparsion.vue';

describe('Comparison', () => {
  it('deletes an item when "Delete Item" button is clicked', async () => {
    const wrapper = mount(Comparison);
    const deleteButtons = wrapper.findAll('button');
    expect(wrapper.findAll('.item-container')).toHaveLength(2);

    await deleteButtons[0].trigger('click');

    expect(wrapper.findAll('.item-container')).toHaveLength(1);
  });
});