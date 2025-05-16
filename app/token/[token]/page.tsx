import type { NextPage } from 'next';
import TokenPage from '@/templates/TokenPage';

type Params = {
  token: string;
};
interface TxDetailsPageProps {
  params: Params;
}

const Token: NextPage<TxDetailsPageProps> = ({ params }) => {
  const token = params?.token; 
  return <TokenPage token={token}/>;
};

export default Token;
