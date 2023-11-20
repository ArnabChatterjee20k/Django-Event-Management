import useEventDetails from "../../services/useEventDetails";
import { useParams } from "react-router-dom";

export default function EventName() {
  const { id } = useParams();
  const { data } = useEventDetails(id as string);
  return <h3 className="text-2xl text-white font-medium text-center">{data?.name}</h3>;
}
