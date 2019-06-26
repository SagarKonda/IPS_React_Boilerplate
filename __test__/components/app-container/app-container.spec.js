import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from '../../../src/components/app-container';
import ErrorContainer from '../../../src/containers/error';
describe('<AppContainer />', () => {
    it('should contain <ErrorContainer />', () => {
        const wrapper = shallow(<AppContainer />);
        expect(wrapper.find(ErrorContainer).length).toEqual(1)
    });
});
