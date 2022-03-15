import { useQuery } from "@apollo/client";
import { GET_STAFF_DATA } from "../queries";
import { normalizeStaffDetail } from "../utils/normalizer";

const useStaffDetail = ({ id = null, skip = false }) => {
  const { data, loading, error, refetch } = useQuery(GET_STAFF_DATA, {
    id,
    skip: skip || !id,
  });

  const fetchMore = async (newVariables) => {
    const { data, loading, error } = await refetch({
      ...newVariables
    });

    return { data: normalizeStaffDetail(data), loading, error, fetchMore };
  }

  return { data, loading, error, fetchMore };
};

export default useStaffDetail;
