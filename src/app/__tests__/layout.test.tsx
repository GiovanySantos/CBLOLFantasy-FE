/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import RootLayout from '../layout';

describe('RootLayout', () => {
  describe('when rendering', () => {
    beforeEach(() => {
      render(<RootLayout>Children</RootLayout>);
    });

    it('should render the children', () => {
      expect(screen.getByText('Children')).toBeInTheDocument();
    });
  });
});
