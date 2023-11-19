export default <T>(
  res: Response,
  errorMessage = "Error while making the request"
): Promise<T> => {
  if (res.status === 200) return res.json();
  throw new Error(JSON.stringify({ cause: errorMessage }));
};