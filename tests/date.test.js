import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import DateSection from '../client/src/DateSection.jsx';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer
    .create(<DateSection />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
