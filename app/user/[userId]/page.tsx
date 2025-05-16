import UserDetails from "@/templates/UserDeatils";
import { NextPage } from "next";

interface UserDetailsPageProps {
  params: string;
}

const UserDetailsPage: NextPage<UserDetailsPageProps> = ({ params }) => {
  const address = params?.userId; 
  return <UserDetails address={address} />;
};

export default UserDetailsPage;