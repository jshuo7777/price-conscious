import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Comparison from '../Comparsion.vue';

describe('Comparison', () => {
  it('renders the component', () => {
    const wrapper = mount(Comparison);
    expect(wrapper.exists()).toBe(true);
  });
});