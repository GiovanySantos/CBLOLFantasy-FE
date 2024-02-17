/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Balance } from '../balance';

const fakeWallet = {
  teamCoast: 500,
  balance: 1000,
  transactions: [
    {
      id: 1,
      date: '2021-08-15',
      value: 100,
      description: 'Depósito inicial',
    },
  ],
};

describe('Balance', () => {
  describe('when is rendered', () => {
    describe('and there is a wallet to show values', () => {
      beforeEach(() => {
        render(<Balance wallet={fakeWallet} />);
      });

      it('should show the wallet label', () => {
        expect(screen.getByText('Carteira:')).toBeInTheDocument();
      });

      it('should show the amount label', () => {
        expect(screen.getByText('Valor do Time:')).toBeInTheDocument();
      });

      it('should show the team cost and the balance', () => {
        expect(screen.getByText(fakeWallet.teamCoast)).toBeInTheDocument();
        expect(screen.getByText(fakeWallet.balance)).toBeInTheDocument();
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });

    describe('and there is no wallet to show values', () => {
      beforeEach(() => {
        render(<Balance wallet={null} />);
      });

      it('should not show the wallet label', () => {
        expect(screen.queryByText('Carteira:')).not.toBeInTheDocument();
      });

      it('should not show the amount label', () => {
        expect(screen.queryByText('Valor do Time:')).not.toBeInTheDocument();
      });

      it('should not show the team cost and the balance', () => {
        expect(
          screen.queryByText(fakeWallet.teamCoast)
        ).not.toBeInTheDocument();
        expect(screen.queryByText(fakeWallet.balance)).not.toBeInTheDocument();
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });
  });
});
