import React from 'react';
import renderer from 'react-test-renderer'; // ES6
import Tasks from './Tasks';

it('should match its snapshot with tasks', () => {
  const tasks = [{
    text: 'some test-text One',
    day: 'March 29th, at 10.15am',
    reminder: false
  },{
    text: 'some test-text Two',
    day: 'March 30th, at 17.20pm',
    reminder: true
  }];
  
  const tree = renderer.create(
    <Tasks tasks={tasks} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
