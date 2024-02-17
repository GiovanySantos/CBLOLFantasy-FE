/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Home from '../page';

jest.mock('@/components/header', () => ({
  Header: () => <div>Children</div>,
}));

describe('Page', () => {
  describe('when rendering', () => {
    beforeEach(() => {
      render(<Home />);
    });

    it('should render the children', () => {
      expect(screen.getByText('Children')).toBeInTheDocument();
    });
  });
});
