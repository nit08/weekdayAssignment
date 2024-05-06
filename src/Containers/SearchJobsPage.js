"use client"

import JobFilterForm from "@/components/JobFilterForm";
import JobsList from "@/components/JobsList";
import { Box } from "@mui/material";
import React, { useState } from "react";

export default function SearchJobsPage({ data }) {
  const [filters, setLocalFilters] = useState({
    jobRole: "",
    minExperience: 0,
    companySize: "",
    jobType: "",
    minBasePay: "",
    companyName: "",
  });
  return (
    <>
      {/* <Provider store={store}> */}
      <JobFilterForm filters={filters} setLocalFilters={setLocalFilters} />
      <Box sx={{ padding: "20px", maxWidth: "1200px" }}>
        <JobsList inititalData={data} filters={filters} />
      </Box>
      {/* </Provider> */}
    </>
  );
}
