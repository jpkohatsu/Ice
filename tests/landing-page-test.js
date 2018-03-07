import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { expect } from 'chai';
import chaiDOM from 'chai-dom';
import chaiAsPromised from 'chai-as-promised';

import AppRoot from '../src/index';

import LandingPage from '../src/containers/landing_page';

describe('Landing Page', () => {
    let rootElement;
    beforeEach(() => {
        // create the app root DOM node
        rootElement = document.createElement('div');
        rootElement.id = 'testing-root';
        document.body.appendChild(rootElement);

        // mount our app
        this.app = render(<AppRoot />, rootElement);
    });

    afterEach(() => {
        unmountComponentAtNode(rootElement);
        document.body.removeChild(rootElement);
    });

    it('selectable with the class landing-page', () => {
        expect(rootElement.find('.landing-page')).to.exist;
    });
});
