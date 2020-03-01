export const performRequest = (url, option) => {
  return fetch(url, option)
    .then(checkStatus)
    .then(response => response.text())
    .catch(async e => {
      const { name: status, response } = e;

      if (!response) {
        return Promise.reject(e);
      }
    });
};

export const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
};

export default performRequest;
