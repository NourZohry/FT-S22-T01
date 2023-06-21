import React, { useEffect, useState } from "react";
import { JobCard } from "../JobCard/JobCard";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const JobCardsContainer = ({ setChosenJob, query, location, fullTimeOnly, pagination, setPagination }) => {

  const [cardResults, setCardResults] = useState(false);
  const [error, setError] = useState("");
  const fetchQueryData = () => {
    fetch("https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs" + "&q=" + query + (fullTimeOnly ? " full-time" : "") + "&location=" + location + "&start=" + pagination + "&api_key=ce50577bc1de030b20a8ed6bce4ae5c6927ee73bad5066073aa3aeecd31687b0")
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.error) {
          setError("No more results.");
        }
        else {
          setError("");
          setCardResults(data);
        }
      })
  }

  const fetchGeneralData = () => {
    fetch("https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&q=" + "developer" + "&start=" + pagination + "&api_key=ce50577bc1de030b20a8ed6bce4ae5c6927ee73bad5066073aa3aeecd31687b0")
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.error) {
          setError("No more results.");
        }
        else {
          setError("");
          setCardResults(data);
        }
      })
  }

  useEffect(() => {
    if (query !== "") {
    fetchQueryData();
  }
  }, [query])

  useEffect(() => {
    if (location !== "") {
      fetchQueryData();
  }
  }, [location])

  useEffect(() => {
    
      fetchQueryData();

  }, [fullTimeOnly])
  

  if (cardResults === false || cardResults.jobs_results.length < pagination+1) {
    
    if (query) {
      fetchQueryData();
    }
    else {
      fetchGeneralData();
    }
  }

  // if (query.length === 0 && location.length === 0 && fullTimeOnly === false) {
  //   fetchGeneralData()
  // }
  // else {  
  //   console.log(query.length)
  //   console.log(location.length)
  //   console.log(fullTimeOnly)
  //   fetchQueryData();
  //   console.log(cardResults);
  // }
  
  return (
    <>
    {cardResults && <Container sx={{width: "80%"}} >
      <Grid
        container
        rowSpacing={6}
        columnSpacing={3}
        // width="80%"
        // mx="auto"
        mt={8}
        mb={8}
      >
        {cardResults.jobs_results.map((job_result) => {
          return (
            <Grid
              onClick={() => setChosenJob(job_result)}
              key={job_result.job_id}
              item
              xs={12}
              sm={6}
              md={4}
              
            >
              <JobCard cardData={job_result} />
            </Grid>
          );
        })}
      </Grid>

      <Box textAlign="center" mb={3}>
        <Button
        onClick={() => setPagination(pagination+10)}
          variant="contained"
          sx={{ textTransform: "capitalize", boxShadow: "0", 
          '&:hover': {
            backgroundColor: "primary.lightviolet",
            boxShadow: "0"
          } }}
          
        >
          Load More
        </Button>
        <Typography>{error}</Typography>
      </Box>
      </Container>
}
</>
  );
};
