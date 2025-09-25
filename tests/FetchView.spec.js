import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import FetchView from '../src/views/FetchView.vue';

const mockPosts = [
  { id: 1, title: 'Post A' },
  { id: 2, title: 'Post B' }
];

describe('FetchView', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPosts)
    }));
  });

  it('carga posts al hacer click', async () => {
    const wrapper = mount(FetchView);
    await wrapper.get('button').trigger('click');
    // esperar microtasks
    await Promise.resolve();
    // otro tick para re-render
    await Promise.resolve();
    expect(wrapper.html()).toContain('Post A');
    expect(fetch).toHaveBeenCalledOnce();
  });

  it('muestra error si respuesta no ok', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({ ok: false }));
    const wrapper = mount(FetchView);
    await wrapper.get('button').trigger('click');
    await Promise.resolve();
    await Promise.resolve();
    expect(wrapper.html()).toContain('Error: Respuesta no OK');
  });
});
