export const normalizePageData = (raw) => {
  let result = {
    items: [],
    meta: {
      total: 0,
      perPage: 0,
      currentPage: 1,
      lastPage: 1,
      hasNextPage: false,
    },
  };

  if (!raw) return result;

  result.meta = {
    ...result.meta,
    ...raw.Page.pageInfo,
  };

  result.items = raw.Page.staffs.map(staff => ({
    ...staff,
    dateOfBirth: `${staff.dateOfBirth.month}/${staff.dateOfBirth.day}/${staff.dateOfBirth.year}`,
  }));

  return result;
};
