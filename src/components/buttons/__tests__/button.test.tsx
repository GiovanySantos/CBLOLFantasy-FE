/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Button } from '../button';

const mockOnClick = jest.fn();

describe('Button', () => {
  describe('when is rendered', () => {
    describe('and is primary color', () => {
      beforeEach(() => {
        render(
          <Button
            variant="primary"
            label="Mim clica"
            onClick={mockOnClick}
            ariaLabel="Mim clica"
          />
        );
      });

      it('should have the primary color', () => {
        const button = screen.getByRole('button', { name: 'Mim clica' });
        expect(button).toHaveClass('bg-cyan-500');
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });

    describe('and is secondary color', () => {
      beforeEach(() => {
        render(
          <Button
            variant="secondary"
            label="Mim clica"
            onClick={mockOnClick}
            ariaLabel="Mim clica"
          />
        );
      });

      it('should have the secondary color', () => {
        const button = screen.getByRole('button', { name: 'Mim clica' });
        expect(button).toHaveClass('bg-lime-300');
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });

    describe('and is not loading', () => {
      beforeEach(() => {
        render(
          <Button
            variant="primary"
            label="Mim clica"
            onClick={mockOnClick}
            ariaLabel="Mim clica acessivel"
          />
        );
      });

      it('should show the button with the label', () => {
        expect(screen.getByText('Mim clica')).toBeInTheDocument();
      });

      it('should have accessibile label', () => {
        expect(screen.getByRole('button', { name: 'Mim clica acessivel' }));
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });

    describe('and is loading', () => {
      beforeEach(() => {
        render(
          <Button
            variant="primary"
            label="Click me"
            onClick={() => {}}
            ariaLabel="Click me"
            isLoading
          />
        );
      });

      it('should show the button with the loading label', () => {
        expect(screen.getByText('Loading...')).toBeInTheDocument();
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });
  });
});
