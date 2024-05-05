import { capitalizeFirstLetter } from "@/utils/util";
import { CheckBox, ElectricBolt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Icon,
  SvgIcon,
  createSvgIcon,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function JobCard({ data }) {
  const {
    companyName,
    jdLink,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
    logoUrl,
  } = data;
  const Experience = () => {
    const textStyle = {
      fontWeight: "700",
      fontSize: "0.8rem",
      color: "gray",
      letterSpacing: ".1rem",
    };
    const expStyle = {
      fontSize: "0.8rem",
    };

    // return (
    //   !!minExp && (
    //     <>
    //       <div style={textStyle}>Minimum Experience</div>
    //       <div style={expStyle}>{minExp} years</div>
    //     </>
    //   )
    // );
    return minExp && !!maxExp ? (
      <>
        <div style={textStyle}>Experience</div>
        <div style={expStyle}>
          {minExp} - {maxExp} years
        </div>
      </>
    ) : (
      !!minExp && (
        <>
          <div style={textStyle}>Minimum Experience</div>
          <div style={expStyle}>{minExp} years</div>
        </>
      )
    );
  };
  return (
    <Card
      style={{
        padding: "20px 25px",
        borderRadius: "20px",
        minWidth: "280px",
        maxWidth: "350px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Image
          height={50}
          width={50}
          src={logoUrl}
          alt="Logo"
          style={{ borderRadius: "8px" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <div
            style={{ color: "#b4b4b4", fontWeight: "500", fontSize: "0.9rem" }}
          >
            {companyName}
          </div>
          <div style={{ fontSize: "1.1rem", fontWeight: "300" }}>
            {capitalizeFirstLetter(jobRole)}
          </div>
        </div>
      </div>
      <div
        style={{
          fontWeight: "500",
          fontSize: "0.8rem",
          paddingLeft: "65px",
          marginTop: "8px",
        }}
      >
        {capitalizeFirstLetter(location)}
      </div>
      {(!!minJdSalary || !!maxJdSalary) && (
        <div
          style={{
            color: "#4a495fde",
            fontWeight: "600",
            fontSize: "0.9rem",
            marginTop: "10px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          Estimated Salary:{" "}
          {[minJdSalary, maxJdSalary].filter((v) => !!v).join("-")}{" "}
          {salaryCurrencyCode}
          <Icon color="success">
            <CheckBox />
          </Icon>
        </div>
      )}

      <div
        style={{ fontWeight: "500", marginTop: "10px", marginBottom: "8px" }}
      >
        About Company:
      </div>
      <div
        style={{ maxHeight: "300px", overflow: "hidden", position: "relative" }}
      >
        {jobDetailsFromCompany}
        <div
          style={{
            height: "150px",
            width: "-webkit-fill-available",
            position: "absolute",
            bottom: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            background: "linear-gradient(180deg, transparent 0, white 100%)",
          }}
        >
          <Button
            href={jdLink}
            style={{
              fontSize: "0.9rem",
              fontWeight: "500",
              boxShadow: "none",
              textTransform: "none",
            }}
          >
            View Job
          </Button>
        </div>
      </div>
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "15px",
        }}
      >
        <Experience />
      </div>
      <Button
        fullWidth
        variant="contained"
        style={{
          height: "45px",
          display: "flex",
          gap: "10px",
          backgroundColor: "#5cf5c5",
          color: "black",
          borderRadius: "8px",
          boxShadow: "none",
          textTransform: "none",
        }}
      >
        Easy Apply
      </Button>
      <Button
        fullWidth
        variant="contained"
        style={{
          marginTop: "10px",
          height: "45px",
          display: "flex",
          gap: "10px",
          backgroundColor: "#5b32ff",
          fontWeight: "350",
          fontSize: "0.8rem",
          borderRadius: "8px",
          boxShadow: "none",
          textTransform: "none",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 24, height: 24 }}
            src="/user-1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            sx={{ width: 24, height: 24 }}
            src="user-2.jpeg"
          />
        </div>
        Unlock referral asks
      </Button>
    </Card>
  );
}
