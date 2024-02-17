/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Header } from '../header';

import { User } from 'types/user';

import { useUser } from '@/components/hooks/use-user';

jest.mock('../profile-box');
jest.mock('@/components/hooks/use-user');

jest.mock('../profile-box', () => ({
  ProfileBox: ({
    handleSave,
    handleEdit,
  }: {
    handleSave: () => void;
    handleEdit: () => void;
  }) => (
    <div data-testid="profile-box">
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleSave}>Save</button>
    </div>
  ),
}));

jest.mock('../balance', () => ({
  Balance: () => <div data-testid="balance" />,
}));

const fakeUser: User = {
  username: 'Neekotina',
  profileThumbUrl: 'url',
  wallet: {
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
  },
};

describe('Header', () => {
  describe('when is rendered', () => {
    describe('and there is user information', () => {
      beforeEach(() => {
        (useUser as jest.Mock).mockReturnValue({
          user: fakeUser,
        });

        render(<Header />);
      });

      it('should call the useUser hook', () => {
        expect(useUser).toHaveBeenCalled();
      });

      it('should render the profile box', () => {
        expect(screen.getByTestId('profile-box')).toBeInTheDocument();
      });

      it('should render the balance', () => {
        expect(screen.getByTestId('balance')).toBeInTheDocument();
      });

      describe('and the user clicks on the edit button', () => {
        beforeEach(() => {
          const editButton = screen.getByText('Edit');
          editButton.click();
        });

        it('should show the save button', () => {
          expect(screen.getByText('Save')).toBeInTheDocument();
        });

        afterEach(() => {
          jest.clearAllMocks();
        });
      });

      describe('and the user clicks on the save button', () => {
        beforeEach(() => {
          const saveButton = screen.getByText('Save');
          saveButton.click();
        });

        it('should show the edit button', () => {
          expect(screen.getByText('Edit')).toBeInTheDocument();
        });

        afterEach(() => {
          jest.clearAllMocks();
        });
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });

    describe('and there is no user information', () => {
      beforeEach(() => {
        (useUser as jest.Mock).mockReturnValue({
          user: null,
        });

        render(<Header />);
      });

      it('should not render the profile box', () => {
        expect(screen.queryByTestId('profile-box')).not.toBeInTheDocument();
      });

      it('should not render the balance', () => {
        expect(screen.queryByTestId('balance')).not.toBeInTheDocument();
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });
  });
});
