import { useQuery } from "@apollo/client";
import { GET_PAGE_DATA } from "../queries";
import { normalizePageData } from "../utils/normalizer";

const usePageData = (props) => {
  const { page = 1, perPage = 5 } = props;

  const { data, loading, error } = useQuery(GET_PAGE_DATA, {
    variables: {
      page,
      perPage,
    },
  });

  return { data: normalizePageData(data), loading, error };
};

export default usePageData;
