import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import store from '../../app/store';
import LoginForm from './LoginForm';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { click } from '@testing-library/user-event/dist/click';

describe(
  'LoginForm', () => {
    const onSubmit = jest.fn();
    const componentRE = <Provider store={store}><LoginForm /></Provider>
    beforeEach(() => {
      onSubmit.mockClear();
      render(componentRE);
    });
    
    it('should render without crashing', () => {
     render(
      componentRE);
    })

/*     it('no permita hacer un submit si no se completó correctamente', () => {

      //Obtener boton login por el id 
      const button = getByTestId('login-button');
      
      // Simulo el evento de submit
      act(() => {
        button.click();
      });
      // Espero que el submit no se haya ejecutado
      expect(onSubmit).not.toHaveBeenCalled();
      // Simulo el evento de submit
    }); */
    it('render input label', () => {
      render(componentRE);
      const label = screen.getByLabelText('Email');
      expect(label).toBeInTheDocument();
    });
    it('onSubmit is called when all field pass validation', () => {
      render(componentRE);
      act (() => {
        fireEvent.change(getEmail(), {
          target: { values: 'asd@sadas.com'}
        });
        fireEvent.change(getPassword(), {
          target: { values: 'F@c3b4r'}
        })
      });
    })
  }
);

function getEmail ()  {
  return screen.getByRole('textbox', {
    name: /email/i
  });
}

function getPassword ()  {
  return screen.getByLabelText(/password/i)
}

function getButton ()  {
  return screen.getByRole('button', {
    name: /in/i
  });
}
