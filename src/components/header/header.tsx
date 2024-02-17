'use client';
import React, { useState } from 'react';

import { ProfileBox } from './profile-box';
import { Balance } from './balance';
import { useUser } from '@/components/hooks/use-user';

export const Header = () => {
  const { user } = useUser();

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // mutation to update username
    // query to get new username
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="w-full p-4 rounded-md shadow-2xl bg-zinc-500">
      {user && (
        //! TO DO skeleton loading
        <div className="flex flex-col gap-4">
          <ProfileBox
            isEditing={isEditing}
            user={user}
            handleSave={handleSave}
            handleEdit={handleEdit}
          />
          <Balance wallet={user.wallet} />
        </div>
      )}
    </div>
  );
};
