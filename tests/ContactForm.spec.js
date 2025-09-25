import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ContactForm from '../src/components/ContactForm.vue';

function fill(wrapper, selector, value) {
  const el = wrapper.get(selector);
  el.setValue(value);
}

describe('ContactForm', () => {
  it('muestra errores si se envía vacío', async () => {
    const wrapper = mount(ContactForm);
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.html()).toContain('El nombre es requerido');
    expect(wrapper.html()).toContain('Email inválido');
  });

  it('envía correctamente con datos válidos', async () => {
    const wrapper = mount(ContactForm);
    fill(wrapper, 'input[type=text]', 'Juan');
    fill(wrapper, 'input[type=email]', 'juan@test.com');
    fill(wrapper, 'textarea', 'Mensaje válido de más de diez');
    await wrapper.get('input[type=checkbox]').setValue(true);
    await wrapper.find('form').trigger('submit.prevent');
    // esperar a la promesa simulada
    await new Promise(r => setTimeout(r, 350));
    expect(wrapper.html()).toContain('Formulario enviado correctamente');
  });
});
