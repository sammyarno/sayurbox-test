import { useQuery } from "@apollo/client";
import { GET_PAGE_DATA } from "../queries";
import { normalizePageData } from "../utils/normalizer";

const usePageData = (props) => {
  const { page = 1, perPage = 5 } = props;

  const { data, loading, error, refetch } = useQuery(GET_PAGE_DATA, {
    variables: {
      page,
      perPage,
    },
  });

  const fetchMore = newVariables => {
    refetch({
      ...newVariables
    });
  }

  return { data: normalizePageData(data), loading, error, fetchMore };
};

export default usePageData;
