import React from 'react';
import renderer from 'react-test-renderer'; // ES6
import Button from './Button';

describe('<Button />', () => {
  it('should render a button with a className', () => {
    const tree = renderer.create(
      <Button></Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should attached an onclick handler passed in', () => {
    const tree = renderer.create(
      <Button onClick={() => {}}></Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render its children', () => {
    const tree = renderer.create(
      <Button>Some text</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

})