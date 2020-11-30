import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Squares from './Squares';

test('Desired table size', () => {
  const component = renderer.create(
    <Squares parentId={'square'}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Add buttons', () => {
  const wrapper = mount(<Squares />)
  expect(wrapper.find('.add-button').length).toBe(2);
});
