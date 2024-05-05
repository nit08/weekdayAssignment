import JobsList from "@/Containers/JobsList";
import { getData } from "@/utils/fetcher";
import { Box } from "@mui/material";

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
      <Box sx={{ padding: "20px", maxWidth: "1200px" }}>
        <JobsList inititalData={data} />
      </Box>
    </main>
  );
}
