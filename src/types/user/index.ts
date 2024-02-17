export type User = {
  username: string;
  profileThumbUrl: string;
  wallet: Wallet;
};

export type Wallet = {
  teamCoast: number;
  balance: number;
  transactions: Transaction[];
};

export type Transaction = {
  id: number;
  date: string;
  value: number;
  description: string;
};
