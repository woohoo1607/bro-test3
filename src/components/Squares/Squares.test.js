import React from 'react';
import {mount} from 'enzyme';
import Squares from './Squares';

test('Desired table size', () => {
  const wrapper = mount(<Squares />);
  const wrapper2 = mount(<Squares initialWidth={6} initialHeight={5} />);
  expect(wrapper.find('tr').length).toBe(4);
  expect(wrapper.find('tr').at(0).find('td').length).toBe(4);
  expect(wrapper.find('tr').at(3).find('td').length).toBe(4);

  expect(wrapper2.find('tr').length).toBe(5);
  expect(wrapper2.find('tr').at(0).find('td').length).toBe(6);
  expect(wrapper2.find('tr').at(3).find('td').length).toBe(6);

});

test('add buttons', () => {
  const wrapper = mount(<Squares />);
  const addLineButton = wrapper.find('#addLine').at(0);
  for (let i = 0; i < 4; i++) {
    addLineButton.simulate('click');
  }
  expect(wrapper.find('tr').length).toBe(8);

  const addColumnButton = wrapper.find('#addColumn').at(0);
  for (let i = 0; i < 3; i++) {
    addColumnButton.simulate('click');
  }
  expect(wrapper.find('tr').at(0).find('td').length).toBe(7);
  expect(wrapper.find('tr').at(1).find('td').length).toBe(7);
  expect(wrapper.find('tr').at(7).find('td').length).toBe(7);
});


test('delete buttons', () => {
  const wrapper = mount(<Squares />);
  const deleteLineButton = wrapper.find('#deleteLine').at(0);
  for (let i = 0; i < 2; i++) {
    deleteLineButton.simulate('click');
  }
  expect(wrapper.find('tr').length).toBe(2);

  const deleteColumnButton = wrapper.find('#deleteColumn').at(0);
  for (let i = 0; i < 2; i++) {
    deleteColumnButton.simulate('click');
  }
  expect(wrapper.find('tr').at(0).find('td').length).toBe(2);
  expect(wrapper.find('tr').at(1).find('td').length).toBe(2);

  for (let i = 0; i < 10; i++) {
    deleteLineButton.simulate('click');
    deleteColumnButton.simulate('click');
  }
  expect(wrapper.find('tr').length).toBe(1);
  expect(wrapper.find('td').length).toBe(1);
});
