export const fetchBenches = (filter) => {
  return $.ajax({
    method: 'GET',
    url: 'api/benches',
    error: (err) => console.log(err)
  });
};
