/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ProfileBox } from '../profile-box';

import { User } from 'types/user';

jest.mock('react-icons/fa', () => ({
  FaUserEdit: () => <div data-testid="edit-icon" />,
}));

jest.mock('@/components/buttons', () => ({
  Button: ({ onClick, label }: { onClick: () => void; label: string }) => (
    <button onClick={onClick}>{label}</button>
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
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

const mockHandleEdit = jest.fn();
const mockHandleSave = jest.fn();

describe('ProfileBox', () => {
  describe('when is rendered', () => {
    describe('and is not editing', () => {
      beforeEach(() => {
        render(
          <ProfileBox
            user={fakeUser}
            isEditing={false}
            handleEdit={mockHandleEdit}
            handleSave={mockHandleSave}
          />
        );
      });

      it('should show the user icon', () => {
        expect(screen.getByAltText('User icon')).toBeInTheDocument();
      });

      it('should show the username', () => {
        expect(screen.getByText(fakeUser.username)).toBeInTheDocument();
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });

    describe('and is editing', () => {
      beforeEach(() => {
        render(
          <ProfileBox
            user={fakeUser}
            isEditing={true}
            handleEdit={mockHandleEdit}
            handleSave={mockHandleSave}
          />
        );
      });

      it('should show the save button icon', () => {
        expect(
          screen.getByRole('button', {
            name: 'Salvar',
          })
        ).toBeInTheDocument();
      });

      it('should show the input with the username', () => {
        expect(screen.getByPlaceholderText('Neekotina')).toBeInTheDocument();
      });

      it('should show the save button', () => {
        expect(screen.getByText('Salvar')).toBeInTheDocument();
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });
  });
});
