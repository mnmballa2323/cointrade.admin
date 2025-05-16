

import TransactionsDetails from "@/templates/TransactionDetails";
import UserDetails from "@/templates/UserDeatils";
import { NextPage } from "next";

type Params = {
  hash: string;
};
interface TxDetailsPageProps {
  params: Params;
}

const TxDetailsPage: NextPage<TxDetailsPageProps> = ({ params }) => {
  const address = params?.hash; 
  return <TransactionsDetails txid={address} />;
};

export default TxDetailsPage;