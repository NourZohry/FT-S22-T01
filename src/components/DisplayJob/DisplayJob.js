import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import "./DisplayJob.css";

export const DisplayJob = ({ chosenJob }) => {
  return (
    <>
      <Box
        mx="auto"
        sx={{ width: "60%" }}
        mt={-3.5}
        mb={4}
      >
        <Box
          sx={{ borderRadius: "0px 6px 6px 6px", backgroundColor: "secondary.main", display: "flex", justifyContent: "space-between", alignItems: "center" }}
          pr={5}
          mb={2}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <img
              src={chosenJob.thumbnail}
              alt={chosenJob.company_name}
              className="displayjob-image"
            />
            <Box>
              <Typography sx={{ color: "primary.verydarkblue", fontSize: "18px", fontWeight: "bold", marginTop: "4px", marginBottom: "4px" }}>{chosenJob.company_name}</Typography>
              <Link
                sx={{ color: "secondary.darkgrey", fontSize: "14px", textDecoration: "none"}}
                href={chosenJob.related_links[0].link}
              >
                {chosenJob.related_links[0].text}
              </Link>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", boxShadow: "0", width: "130px", height: "45px", color: "buttontest.col", fontWeight: "bold", backgroundColor: "buttontest.bg", '&:hover': {
              backgroundColor: "buttontest.hov",
              boxShadow: "0"
            } }}
          >
            Company Site
          </Button>
        </Box>

        <Box
          sx={{ borderRadius: "6px", backgroundColor: "secondary.main" }}
          p={4}
          px={5}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
            mb={5}
          >
            <Box>
              <Typography sx={{ color: "secondary.darkgrey", fontSize: "14px", marginTop: "10px" }}>
                {console.log(chosenJob)}
                {chosenJob.detected_extensions.posted_at} - {chosenJob.detected_extensions.schedule_type}
              </Typography>
              <Typography sx={{ color: "primary.verydarkblue", fontSize: "26px", fontWeight: "bold", marginTop: "4px", marginBottom: "4px" }}>{chosenJob.title}</Typography>

              <Typography sx={{ color: "primary.main", fontSize: "12px", fontWeight: "bold" }}>{chosenJob.location}</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", boxShadow: "0", fontWeight: "bold", width: "130px", height: "45px", '&:hover': {
                backgroundColor: "primary.lightviolet",
                boxShadow: "0"
              } }}
            >
              Apply Now
            </Button>
          </Box>

          <Typography color="secondary.darkgrey">{chosenJob.description}</Typography>

          {chosenJob.job_highlights.map((job_highlight) => {
            return (
              <>
                <Typography
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "primary.verydarkblue" }}
                  mt={2}
                  mb={3}
                >
                  {job_highlight.title}
                </Typography>
                {job_highlight.items.map((item) => {
                  return <Typography my={1} color="secondary.darkgrey"><span display="inline" fontWeight="bold" mr={2} color="primary.main">•</span> {item}</Typography>;
                })}
              </>
            );
          })}
        </Box>
      </Box>

      {/* Footer */}
      <Box backgroundColor="secondary.main" py={1}>
        <Box
          mx="auto"
          sx={{ width: "60%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <Box>
            <Typography sx={{ color: "primary.verydarkblue", fontSize: "18px", fontWeight: "bold"}}>{chosenJob.title}</Typography>
            <Typography sx={{ color: "secondary.darkgrey", fontSize: "14px" }}>{chosenJob.company_name}</Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", boxShadow: "0", fontWeight: "bold", width: "130px", height: "45px", '&:hover': {
              backgroundColor: "primary.lightviolet",
              boxShadow: "0"
            } }}
          >
            Apply Now
          </Button>
        </Box>
      </Box>
    </>
  );
};
