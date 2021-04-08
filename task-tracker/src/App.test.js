import React from 'react';
import renderer, { act } from 'react-test-renderer'; // ES6
import AddTask from './components/AddTask';

it('should match its empty snapshot', () => {
  const tree = renderer.create(
    <AddTask />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should check the tasks', () => {
  const tasks = [{
    text: 'some test-text One',
    day: 'March 29th, at 10.15am',
    reminder: false
  },{
    text: 'some test-text Two',
    day: 'March 30th, at 17.20pm',
    reminder: true
  }];
  const component = renderer.create(
    <AddTask tasks={tasks} />
  );

  // render the initial state
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // tree has the view console.log('tree', tree);
  // tree {
  //   type: 'form',
  //   props: { className: 'add-form', onSubmit: [Function: onSubmit] },
  //   children: [
  //     { type: 'div', props: [Object], children: [Array] },
  //     { type: 'div', props: [Object], children: [Array] },
  //     { type: 'div', props: [Object], children: [Array] },
  //     { type: 'input', props: [Object], children: null }
  //   ]
  // }

  // find the task with reminder field checked
  const task = tree.children.filter(child => child.type === 'div')[2];
  const input = task.children.filter(child => child.type === 'input')[0];

  // create mock event with current target
  // in order to pass it to onChange
  const mockEvent = {
    currentTarget: {checked: true}
  }

  // check this task
  act(() => {
    input.props.onChange(mockEvent)
  });

  // // snapshot stay with toggled task
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


it('should add a new content into input field', () => {
  const tree = renderer.create(
    <AddTask />
  ).toJSON();
  expect(tree).toMatchSnapshot();

  // find the task and the input field in it
  const task = tree.children.filter(child => child.type === 'div')[0]
  const input = task.children.filter(child => child.type === 'input')[0];
  
  // set the input value
  act(() => {input.props.onChange({
      target: {value: 'Some new text for the task'}
    });
    tree.props.onSubmit({preventDefault: () => {} });
  });

  // snapshot it again
  expect(tree).toMatchSnapshot();
});
