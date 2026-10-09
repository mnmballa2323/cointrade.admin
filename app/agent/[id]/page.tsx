
import Agents from '@/templates/AgentDetails';
import { NextPage } from '@/platform/types';


type Params = {
  id: string;
};
interface AgentDetailsPageProps {
  params: Params;
}

const AgnetDetails : NextPage<AgentDetailsPageProps> = ({ params }) => {
    const id = params?.id; 
  return <Agents id={id}/>;
};

export default AgnetDetails;
