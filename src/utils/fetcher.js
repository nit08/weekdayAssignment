export const getData = async (offset, limit = 20) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: limit,
    offset: offset || 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: true, message: "Something went wrong!" };
  }
};
