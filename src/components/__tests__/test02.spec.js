import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Comparison from '../Comparsion.vue';

describe('Comparison', () => {
  it('renders two initial items', () => {
    const wrapper = mount(Comparison);
    const itemContainers = wrapper.findAll('.item-container');
    expect(itemContainers).toHaveLength(2);
  });
});