export const adaptBooksResponse = (response: any): any => {
  if (response) {
    const resp = {
      data: response.data,
      total: Number(response.headers["x-total-count"]),
    };

    return resp;
  }
};
