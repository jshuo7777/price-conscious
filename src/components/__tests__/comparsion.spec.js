import { shallowMount } from '@vue/test-utils';
import Comparison from '../Comparison.vue';

describe('Comparison.vue', () => {
  it('initializes with two items', () => {
    const wrapper = shallowMount(Comparison);
    const items = wrapper.findAll('.item-container');
    expect(items).toHaveLength(2);
  });

  it('computes price per gram correctly', async () => {
    const wrapper = shallowMount(Comparison);
    const item1 = wrapper.findAll('.item-container').at(0);
    const item2 = wrapper.findAll('.item-container').at(1);

    await item1.find('input[type="number"]').at(0).setValue(100);
    await item1.find('input[type="number"]').at(1).setValue(10);
    await item2.find('input[type="number"]').at(0).setValue(200);
    await item2.find('input[type="number"]').at(1).setValue(30);

    expect(item1.text()).toContain('Price per gram: $0.10/g');
    expect(item2.text()).toContain('Price per gram: $0.15/g');
  });
});