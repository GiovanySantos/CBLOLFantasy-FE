import { SiLitecoin } from 'react-icons/si';
import { Wallet } from 'types/user';

interface IProps {
  wallet: Wallet | null;
}

const Amount = ({ value }: { value: number }) => {
  return (
    <div className="flex items-center gap-1 px-2 rounded-md shadow-xl lg:p-2 bg-zinc-700">
      {value}
      <span className="text-amber-300">
        <SiLitecoin />
      </span>
    </div>
  );
};

const WalletRow = ({ label, value }: { label: string; value: number }) => {
  return (
    <span className="flex items-center justify-between w-full">
      <h3>{label}</h3>
      <Amount value={value} />
    </span>
  );
};

export const Balance: React.FC<IProps> = ({ wallet }) => {
  if (!wallet) return null;

  const { balance, teamCoast } = wallet;
  const walletLabel = 'Carteira: ';
  const amoutLabel = 'Valor do Time: ';

  return (
    <div className="flex flex-col w-full gap-1 font-semibold mobileL:text-2xl text-zinc-200">
      <WalletRow label={walletLabel} value={balance} />
      <WalletRow label={amoutLabel} value={teamCoast} />
    </div>
  );
};
