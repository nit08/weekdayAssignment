import { capitalizeFirstLetter } from "@/utils/util";
import { Avatar, Button, Card, Container, Icon } from "@mui/material";
import Image from "next/image";
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
    <Container
      style={{
        flex: "1 1 auto",
        padding: "12px 25px",
        borderRadius: "20px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
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
            gap: "5px",
            alignItems: "center",
          }}
        >
          Estimated Salary:{" "}
          {[minJdSalary, maxJdSalary].filter((v) => !!v).join("-")}{" "}
          {salaryCurrencyCode}
          <Icon>
            <CheckIcon />
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
        href={jdLink}
        variant="contained"
        style={{
          height: "45px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          backgroundColor: "#5cf5c5",
          color: "black",
          borderRadius: "8px",
          boxShadow: "none",
          textTransform: "none",
        }}
      >
        <Icon style={{ lineHeight: "initial" }}>
          <BoltIcon />
        </Icon>
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
        <div style={{ display: "flex", gap: "5px" }}>
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
    </Container>
  );
}

const CheckIcon = () => (
  <svg
    fill="#24e076"
    version="1.1"
    id="Capa_1"
    width="20px"
    height="20px"
    viewBox="-3.69 -3.69 53.50 53.50"
    stroke="#24e076"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCCCCC"
      strokeWidth="0.09224800000000001"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <g>
            <path d="M37.727,0.062H8.397C3.759,0.062,0,3.822,0,8.46v29.204c0,4.639,3.759,8.398,8.397,8.398h29.33 c4.637,0,8.397-3.76,8.397-8.398V8.46C46.125,3.822,42.365,0.062,37.727,0.062z M38.007,19.14L22.142,35.005 c-0.673,0.674-1.586,1.052-2.538,1.052s-1.865-0.379-2.538-1.052l-7.863-7.863c-1.401-1.402-1.401-3.674,0.001-5.077 c0.673-0.673,1.585-1.051,2.537-1.051c0.952,0,1.864,0.378,2.537,1.051l4.686,4.687c0.17,0.17,0.401,0.266,0.641,0.266 c0.24,0,0.471-0.096,0.641-0.266l12.686-12.687c0.674-0.673,1.586-1.052,2.539-1.052c0.951,0.001,1.864,0.379,2.537,1.052 C39.409,15.467,39.409,17.739,38.007,19.14z"></path>{" "}
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const BoltIcon = () => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 512 512"
    aria-hidden="true"
    role="img"
    className="iconify iconify--fxemoji"
    preserveAspectRatio="xMidYMid meet"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#FFB636"
        d="M459.866 218.346l-186.7.701c-4.619.017-7.618-4.861-5.517-8.975L370.845 8.024c3.103-6.075-4.493-11.949-9.592-7.417L39.948 286.141c-4.221 3.751-1.602 10.732 4.045 10.78l170.444 1.457c4.443.038 7.391 4.619 5.583 8.679L133.317 501.73c-2.688 6.035 4.709 11.501 9.689 7.16l320.937-279.725c4.307-3.753 1.637-10.84-4.077-10.819z"
      ></path>
    </g>
  </svg>
);
