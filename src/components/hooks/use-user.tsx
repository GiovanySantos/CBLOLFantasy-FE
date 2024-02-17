export const useUser = () => {
  return {
    user: {
      username: 'Neekotina',
      profileThumbUrl:
        'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/1002.jpg',
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
    },
  };
};
