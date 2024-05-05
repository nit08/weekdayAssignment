import Image from "next/image";
import styles from "./page.module.css";
import JobCard from "@/components/JobCard";

const getData = async () => {
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
    return await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    ).then((response) => response.json());
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
};

export default async function Home() {
  const data = await getData();
  return (
    <main
      style={{
        width: "100%",
        flexDirection: "column",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <div>Filters</div>
      <div
        style={{
          maxWidth: "1200px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {data?.jdList?.map((l) => (
          <JobCard data={l} key={l?.jbUid} />
        ))}
      </div>
    </main>
  );
}
