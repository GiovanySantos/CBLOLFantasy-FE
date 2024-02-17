/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ErrorComponent from '../error';

const reset = jest.fn();

describe('Error', () => {
  describe('when is called', () => {
    beforeEach(() => {
      const error = new Error('Test error');

      render(<ErrorComponent error={error} reset={reset} />);
    });

    it('should render the error message', () => {
      expect(
        screen.getByText('Ihh deu ruim em alguma coisa guerreiro!')
      ).toBeInTheDocument();
    });

    it('should render the reset button', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should call the reset function when the button is clicked', () => {
      screen.getByRole('button').click();
      expect(reset).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
  });
});
