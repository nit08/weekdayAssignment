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
const JobFilterForm = ({filters,setLocalFilters}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [experience, setExperience] = useState(0);


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setExperience(value);
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      minExperience: value,
    }));
  };

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "experience-popover" : undefined;

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(setFilters(filters));
  };

  return (
    <div style={{ padding: "40px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}
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
            sx={{ minWidth: "160px", width: "max-content" }}
            size="small"
          >
            <InputLabel id="experience-slider">Minimum Experience</InputLabel>
            <Select
              labelId="experience-slider"
              name="minExperience"
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
            sx={{ minWidth: "160px", width: "max-content" }}
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
            sx={{ minWidth: "160px", width: "max-content" }}
            size="small"
          >
            <InputLabel id="job-type">Job Type</InputLabel>
            <Select
              labelId="job-type"
              name="jobType"
              label="Job Type"
              value={filters.jobType}
              onChange={handleFilterChange}
            >
              <MenuItem value="any">No Preference</MenuItem>
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="inoffice">In-office</MenuItem>
              <MenuItem value="hybrid">Hybrid</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            size="small"
            name="minBasePay"
            label="Minimum Base Pay"
            value={filters.minBasePay}
            onChange={handleFilterChange}
          />
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
        <Button color="primary">Clear</Button>
      </form>
    </div>
  );
};

export default JobFilterForm;
