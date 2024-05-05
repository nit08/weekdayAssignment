import Image from "next/image";
import styles from "./page.module.css";

const getData = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };
  try {
    return fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    ).then((response) => response.text());
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
};

export default async function Home() {
  const data = await getData();
  return <main></main>;
}
