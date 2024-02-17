/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Loading from '../loading';

describe('Loading', () => {
  describe('when rendering', () => {
    beforeEach(() => {
      render(<Loading />);
    });

    it('should render the loading text', () => {
      expect(screen.getByText('Carregando...')).toBeInTheDocument();
    });
  });
});
