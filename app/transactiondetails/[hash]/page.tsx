

import TransactionsDetails from "@/templates/TransactionDetails";
import UserDetails from "@/templates/UserDeatils";
import { NextPage } from "next";

interface TxDetailsPageProps {
  params: string;
}

const TxDetailsPage: NextPage<TxDetailsPageProps> = ({ params }) => {
  const address = params?.hash; 
  return <TransactionsDetails txid={address} />;
};

export default TxDetailsPage;