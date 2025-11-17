import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App.tsx';

describe.only('App component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});