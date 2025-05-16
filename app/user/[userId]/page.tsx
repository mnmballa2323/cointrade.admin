import UserDetails from "@/templates/UserDeatils";
import { NextPage } from "next";

type Params = {
  userId: string;
};
interface UserDetailsPageProps {
  params: Params;
}

const UserDetailsPage: NextPage<UserDetailsPageProps> = ({ params }) => {
  const address = params?.userId; 
  return <UserDetails address={address} />;
};

export default UserDetailsPage;