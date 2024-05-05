import Image from "next/image";
import styles from "./page.module.css";
import JobCard from "@/components/JobCard";
import { Grid } from "@mui/material";

const getData = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 20,
    offset: 5,
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
          padding: "0px 10px",
          maxWidth: "1200px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {data?.jdList?.map((l, i) => (
            <Grid item xs={2} sm={4} md={4} key={i}>
              <JobCard data={l} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
}
