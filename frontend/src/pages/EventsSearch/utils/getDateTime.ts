export default (inputDateTimeString: string) => {
  const inputDate = new Date(inputDateTimeString);

  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const date = inputDate.getDate().toString().padStart(2, "0");
  const hours = inputDate.getHours().toString().padStart(2, "0");
  const minutes = inputDate.getMinutes().toString().padStart(2, "0");
  const seconds = inputDate.getSeconds().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${date}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return { formattedDate, formattedTime };
};
