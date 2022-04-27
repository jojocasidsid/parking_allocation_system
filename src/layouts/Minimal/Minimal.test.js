import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'config/theme/theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Minimal from '.';

describe('Minimal layout', () => {
  it('should render without crashing', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="*" element={<Minimal />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );

    expect(tree).toMatchSnapshot();
  });
});
