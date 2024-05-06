"use client";

import React, { useEffect, useState } from "react";
import JobCard from "@/components/JobCard";
import { Box, CircularProgress, Grid } from "@mui/material";
import { getData } from "@/utils/fetcher";
import getFilteredJobData from "@/utils/filter";

export default function JobsList({ inititalData, filters }) {
  const [jobs, setJobs] = useState(inititalData?.jdList);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    const { jdList, error } = await getData(offset);
    if (!error) {
      setJobs((prevJobs) => [...prevJobs, ...jdList]);
      setOffset((prevOffset) => prevOffset + 20);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    fetchJobs();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {jobs?.getFilteredJobData(filters).map((l, i) => (
          <Grid item xs={2} sm={4} md={4} key={i}>
            <JobCard data={l} />
          </Grid>
        ))}
      </Grid>
      {loading && (
        <Box
          sx={{
            display: "flex",
            height: "100px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
