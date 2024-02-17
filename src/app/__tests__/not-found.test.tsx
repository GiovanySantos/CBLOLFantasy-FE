/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import NotFound from '../not-found';

describe('NotFound', () => {
  describe('when rendering', () => {
    beforeEach(() => {
      render(<NotFound />);
    });

    it('should render the not found text', () => {
      expect(screen.getByText('Página não encontrada 404')).toBeInTheDocument();
    });
  });
});
