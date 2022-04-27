import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'config/theme/theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from '.';

describe('Main layout', () => {
  it('should render without crashing', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="*" element={<MainLayout />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );

    expect(tree).toMatchSnapshot();
  });
});
