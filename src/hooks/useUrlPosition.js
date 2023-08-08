import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
  const [searchParams, sertSearchParams] = useSearchParams();
  const Lat = searchParams.get("lat");
  const Lng = searchParams.get("lng");
  return [Lat, Lng];
}

export default useUrlPosition;
