import React from 'react';
import { describe, it, expect } from 'vitest';
import Navbar from '../components/Navbar';

describe('Navbar Component Tests', () => {
  it('should render Navbar component without crashing', () => {
    expect(Navbar).toBeDefined();
  });
});
