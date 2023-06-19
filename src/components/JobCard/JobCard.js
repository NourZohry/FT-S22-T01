import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./JobCard.css";

export const JobCard = ({ cardData }) => {
  const data = cardData;

  return (
    <Box sx={{ height: "100%", backgroundColor: "secondary.main", borderRadius: "6px", minWidth: " 20vw", width: "100%" }}>
      <CardContent sx={{ height: "100%" }}>
        {cardData.thumbnail && <img
          src={cardData.thumbnail}
          alt={cardData.companyName}
          className="company-thumbnail"
        />}
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
          <Box>
            <Typography sx={{ color: "secondary.darkgrey", fontSize: "14px", marginTop: "10px"}}>
              {cardData.detected_extensions.posted_at} - {cardData.detected_extensions.schedule_type}
            </Typography>
            <Typography sx={{ color: "primary.verydarkblue", fontSize: "18px", fontWeight: "bold", marginTop:"4px", marginBottom:"4px" }}>{cardData.title}</Typography>
            <Typography sx={{ color: "secondary.darkgrey", fontSize: "14px" }}>{cardData.company_name}</Typography>
          </Box>
          <Typography sx={{ color: "primary.main", fontSize: "12px", fontWeight: "bold", marginTop: "30px" }}>{cardData.location}</Typography>
        </Box>
      </CardContent>
    </Box>
  );
};
