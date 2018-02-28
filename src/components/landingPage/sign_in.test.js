import React from 'react';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { MemoryRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { shallow, mount, render } from 'enzyme';
import SignIn from './sign_in';

describe('SignIn', () => {
    let store;
    let wrapper;

    beforeEach(() => {
        store = createStore(combineReducers({ form: formReducer }));
        wrapper = render(
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/']}>
                        <SignIn />
                    </MemoryRouter>
                </Provider>);
    });

    it('is selectable by the class sign-in', () => {
        expect(wrapper.find('.sign-in').exists()).toBe(true);
        });
});
