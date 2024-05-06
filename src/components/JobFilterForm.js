"use client";

import { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Popover,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setFilters } from "@/redux/actions";

// import { setFilters } from "../redux/actions";

const experienceOptions = [
  "No minimum experience",
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5 years",
  "6 years",
  "7 years",
  "8 years",
  "9 years",
  "10+ years",
];
const JobFilterForm = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const [experience, setExperience] = useState(0);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ ...filters, [name]: value }));
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;

    setExperience(value);
    dispatch(setFilters({ ...filters, minExperience: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(setFilters(filters));
  };

  return (
    <div style={{ padding: "40px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        <div>
          <TextField
            size="small"
            name="jobRole"
            label="Job Role"
            value={filters.jobRole}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <FormControl
            sx={{ minWidth: "180px", width: "max-content" }}
            size="small"
          >
            <InputLabel id="experience-slider">Minimum Experience</InputLabel>
            <Select
              labelId="experience-slider"
              name="minExp"
              value={experience}
              label="Minimum Experience"
              onChange={handleSliderChange}
            >
              {experienceOptions.map((o, i) => (
                <MenuItem value={i} key={i}>
                  {o}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl
            sx={{ minWidth: "180px", width: "max-content" }}
            size="small"
          >
            <InputLabel id="company-size">Company Size</InputLabel>
            <Select
              labelId="company-size"
              name="companySize"
              label="Company Size"
              value={filters.companySize}
              onChange={handleFilterChange}
            >
              <MenuItem value="">Any size</MenuItem>
              <MenuItem value="1-10">1-10 employees</MenuItem>
              <MenuItem value="11-50">11-50 employees</MenuItem>
              <MenuItem value="51-200">51-200 employees</MenuItem>
              <MenuItem value="201-500">201-500 employees</MenuItem>
              <MenuItem value="501-2000">501-2000 employees</MenuItem>
              <MenuItem value=">2000">Over 2000 employees</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl
            sx={{ minWidth: "180px", width: "max-content" }}
            size="small"
          >
            <InputLabel id="job-type">Job Type</InputLabel>
            <Select
              labelId="job-type"
              name="location"
              label="Job Type"
              value={filters.location}
              onChange={handleFilterChange}
            >
              <MenuItem value="any">No Preference</MenuItem>
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="onsite">In-office</MenuItem>
              <MenuItem value="hybrid">Hybrid</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl
            sx={{ minWidth: "210px", width: "max-content" }}
            size="small"
          >
            <InputLabel id="job-type">Minimum Base Pay</InputLabel>
            <Select
              labelId="job-type"
              name="minBasePay"
              label="Minimum Base Pay"
              value={filters.minBasePay}
              onChange={handleFilterChange}
            >
              {["0L", "5L", "10L", "15L", "20L"].map((o, i) => (
                <MenuItem value={parseInt(o.slice(0, -1))} key={i}>
                  {o}
                </MenuItem>
              ))}{" "}
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            size="small"
            name="companyName"
            label="Company Name"
            value={filters.companyName}
            onChange={handleFilterChange}
          />
        </div>
      </form>
    </div>
  );
};

export default JobFilterForm;
