import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PeopleDetail from "./people_detail";


describe('PeopleDetail', () => {
    describe('Shallow Render', () => {
        it('selectable with the class people-detail', () => {
            expect(shallow(<PeopleDetail />).is('.people-detail')).toBe(true);
        });
    });

    describe("Full Mount", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(<PeopleDetail />);
        });

        it('should contain an <img> tag', () => {
            expect(wrapper.find('img').exists()).toEqual(true);
        });

        it('should contain a span with class .name', () => {
            expect(wrapper.find('.name').exists()).toEqual(true);
        });

        it('should contain a span with class .title', () => {
            expect(wrapper.find('.title').exists()).toEqual(true);
        });

        it('should contain a span with class .current-position', () => {
            expect(wrapper.find('.current-position').exists()).toEqual(true);
        });
    });
});
