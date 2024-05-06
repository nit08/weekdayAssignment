import SearchJobsPage from "@/Containers/SearchJobsPage";
import { getData } from "@/utils/fetcher";

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
      <SearchJobsPage data={data} />
    </main>
  );
}
