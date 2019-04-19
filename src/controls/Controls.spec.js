// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import Controls from '../controls/Controls'

describe('Testing Controls Module', () => {

  it('should render component on load', () => {
    render(<Controls />);
  });

  it('should display lock gate if locked is false and closed is true', () => {
    const locked = false;
    const closed = true;

    const { getByText } = render(<Controls locked={locked} closed={closed} />);

    const text = getByText(/lock gate/i);

    expect(text).toBeInTheDocument();
  })

  it('should display open gate if locked is false and closed is true', () => {
    const locked = false;
    const closed = true;

    const { getByText } = render(<Controls locked={locked} closed={closed} />);

    const text = getByText(/open gate/i);

    expect(text).toBeInTheDocument();
  })

  it('should match the snapshot', () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  })

});