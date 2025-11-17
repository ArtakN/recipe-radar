import { describe, it, expect } from 'vitest';
// import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../src/components/Footer.tsx';
// import App from '../src/App.tsx';
// import HomePage from '../src/pages/HomePage.tsx';

describe.only('App component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeTruthy();
  });
  // it('1+1', () => {
  //   expect(1+1).toBe(2);
  // });
});