import { describe, it, expect } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '../src/stores/counter';

describe('counter store', () => {
  it('incrementa, decrementa y resetea', () => {
    setActivePinia(createPinia());
    const store = useCounterStore();
    expect(store.count).toBe(0);
    store.increment();
    store.increment();
    expect(store.count).toBe(2);
    expect(store.double).toBe(4);
    store.decrement();
    expect(store.count).toBe(1);
    store.reset();
    expect(store.count).toBe(0);
  });
});
