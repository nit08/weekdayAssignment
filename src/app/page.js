import JobFilterForm from "@/components/JobFilterForm";
import JobsList from "@/components/JobsList";
import { Box } from "@mui/material";
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
      <JobFilterForm />
      <Box sx={{ padding: "20px", maxWidth: "1200px" }}>
        <JobsList inititalData={data} />
      </Box>
    </main>
  );
}
