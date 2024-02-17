import React from 'react';

import Image from 'next/image';

import { FaUserEdit } from 'react-icons/fa';

import { User } from '../../types/user';
import { Button } from '@/components/buttons';

interface IProps {
  user: User;
  isEditing: boolean;
  handleEdit: () => void;
  handleSave: () => void;
}

const Username = ({ username }: { username: string }) => {
  return (
    <h2 className="text-xl font-semibold mobileL:text-3xl text-zinc-200">
      {username}
    </h2>
  );
};

const Icon = ({ url }: { url: string }) => {
  return (
    <Image
      className="rounded-md shadow-2xl w-14 mobileL:w-20 tablet:w-24"
      src={url}
      alt="User icon"
      width={1080}
      height={1080}
    />
  );
};

const Input = ({ actualUserName }: { actualUserName: string }) => {
  return (
    <input
      className="w-full p-2 rounded-md bg-zinc-300 text-zinc-800"
      type="text"
      placeholder={actualUserName}
    />
  );
};

export const ProfileBox: React.FC<IProps> = ({
  user,
  isEditing,
  handleEdit,
  handleSave,
}) => {
  const { username, profileThumbUrl } = user;

  return (
    <div className="flex justify-between gap-1">
      <div className="flex items-center gap-1 tablet:gap-5">
        <Icon url={profileThumbUrl} />
        {isEditing ? (
          <Input actualUserName={username} />
        ) : (
          <Username username={username} />
        )}
      </div>
      <div className="flex items-center">
        {isEditing ? (
          <Button
            variant="secondary"
            label="Salvar"
            ariaLabel="Salvar"
            onClick={handleSave}
          />
        ) : (
          <button
            className="text-2xl bg-transparent border-none mobileL:text-4xl tablet:text-6xl hover:text-amber-400"
            onClick={handleEdit}
          >
            <FaUserEdit />
          </button>
        )}
      </div>
    </div>
  );
};
