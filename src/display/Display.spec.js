// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

const testData = {
  closed: true,
  locked: false
}

describe('Testing Display Module', () => {

  it('should render component on load', () => {
    render(<Display />);
  });

  it('should receive closed prop', () => {
    const { closed } = testData;

    const { getByText } = render(<Display closed={closed} />);
    const text = getByText(/closed/i);

    expect(text).toBeInTheDocument();
  });

  it('should receive locked prop', () => {
    const { locked } = testData;

    const { getByText } = render(<Display locked={locked} />);
    const text = getByText(/locked/i);

    expect(text).toBeInTheDocument();
  });

  it('should return open when locked is false and closed is false', () => {
    const isOpened = {
      closed: false,
      locked: false
    }

    const { getByText } = render(<Display isOpened={isOpened} />);
    const text = getByText(/open/i);

    expect(text).toBeInTheDocument();
  })

  it('should return locked when locked is true and closed is true', () => {
    const isOpened = {
      closed: true,
      locked: true
    }

    const { getByText } = render(<Display isOpened={isOpened} />);
    const text = getByText(/locked/i);

    expect(text).toBeInTheDocument();
  })

  it('should return unlocked when locked is false', () => {
    const isOpened = {
      closed: false,
      locked: false
    }

    const { getByText } = render(<Display isOpened={isOpened} />);
    const text = getByText(/unlocked/i);

    expect(text).toBeInTheDocument();
  })
});