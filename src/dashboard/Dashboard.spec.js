// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard'
import 'jest-dom/extend-expect';
import Controls from '../controls/Controls'
import Display from '../display/Display'

describe('Testing Dashboard Module', () => {

  it('should render component on load', () => {
    render(<Dashboard />);
  });

  it("should check if btn to close gate is called", () => {
    const mock = jest.fn();
    const { getByText } = render(<Controls toggleClosed={mock} />);
   
    const closeBtn = getByText(/close gate/i);
   
    fireEvent.click(closeBtn);
   
    expect(mock).toHaveBeenCalled();
   });
   
   it("should check if btn to open gate is called", () => {
    const mock = jest.fn();
    const { getByText } = render(
      <Controls closed={true} toggleClosed={mock} />
    );
   
    const openBtn = getByText(/open gate/i);
   
    fireEvent.click(openBtn);
   
    expect(mock).toHaveBeenCalled();
   });
   
   it("should check if btn to unlock gate is called", () => {
    const mock = jest.fn();
    const { getByText } = render(
      <Controls closed={true} locked={true} toggleLocked={mock} />
    );
   
    const unlockBtn = getByText(/unlock gate/i);
   
    fireEvent.click(unlockBtn);
   
    expect(mock).toHaveBeenCalled();
   });
   
   it("should check if btn to lock gate is called", () => {
    const mock = jest.fn();
   
    const { getByText } = render(
      <Controls closed={true} locked={false} toggleLocked={mock} />
    );
   
    const lockBtn = getByText(/lock gate/i);
   
    fireEvent.click(lockBtn);
   
    expect(mock).toHaveBeenCalled();
   });

});