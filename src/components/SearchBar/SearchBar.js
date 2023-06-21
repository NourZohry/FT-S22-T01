import { Box, Button, Checkbox, Dialog, Divider, FormControlLabel, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";

import FilterAltIcon from "@mui/icons-material/FilterAlt";

export const SearchBar = ({ setQuery, setLocation, setFullTimeOnly, setPagination }) => {

  const [localQuery, setLocalQuery] = useState("");
  const [localLocation, setLocalLocation] = useState("");
  const [localFullTimeOnly, setLocalFullTimeOnly] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMed = useMediaQuery(theme.breakpoints.up("md"));

  const handleClick = () => {
    console.log(localQuery);
    console.log(localLocation);
    setPagination(0);
    setQuery(localQuery);
    setLocation(localLocation);
    setFullTimeOnly(localFullTimeOnly);
  };

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {matches ? (
        <Box
          sx={{ width: "80%", mx: "auto", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "secondary.main", borderRadius: "6px" }}
          my={-3.5}
        >
          <TextField
            onChange={(e) => (setLocalQuery(e.target.value))}
            placeholder="Filter by title, companies, expertise..."
            defaultValue={localQuery}
            InputProps={{
              style: { fontSize: 14, color: "grey" },
              sx: {
                "& input": {
                  "&:hover": {
                    cursor: "pointer",
                  },
                  textOverflow: "ellipsis",
                },
                borderRadius: 0,
                input: {
                  color: "secondary.darkgrey",
                  "&::placeholder": {
                    opacity: 1,
                  },
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
            sx={{
              // width: "100%",
              flexGrow: 3,
              "& fieldset": { border: "none" },
            }}
          />
          <Divider
            orientation="vertical"
            flexItem
          />
          <TextField
            onChange={(e) => (setLocalLocation(e.target.value))}
            placeholder="Filter by location..."
            defaultValue={localLocation}
            border="0px"
            InputProps={{
              style: { fontSize: 14, color: "grey" },
              sx: {
                "& input": {
                  "&:hover": {
                    cursor: "pointer",
                  },
                  textOverflow: "ellipsis",
                },
                borderRadius: 0,
                input: {
                  color: "secondary.darkgrey",
                  "&::placeholder": {
                    opacity: 1,
                  },
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon color="primary" />
                </InputAdornment>
              ),
            }}
            sx={{
              // width: "100%",
              flexGrow: 1,
              "& fieldset": { border: "none" },
            }}
          />
          <Divider
            orientation="vertical"
            flexItem
          />

          <Box
            sx={{
              // width: "100%",
              flexGrow: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: "10px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel
                control={<Checkbox onChange={(e) => setLocalFullTimeOnly(e.target.checked)} defaultChecked={localFullTimeOnly} />}
                label={<Typography sx={{ fontSize: 14, fontWeight: "bold", color: "primary.verydarkblue" }}>{matchesMed ? "Full Time Only" : "Full Time"}</Typography>}
              />
              {/* <Typography ml="-20px">Full Time Only</Typography> */}
            </Box>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                width: "35%",
                boxShadow: "0",
                marginRight: "10px", // height: "40px",
                "&:hover": {
                  backgroundColor: "primary.lightviolet",
                  boxShadow: "0",
                },
              }}
              onClick={() => handleClick()}
            >
              Search
            </Button>
          </Box>
        </Box>
      ) : (
        <>
          {showPopup && (
            <Dialog
              fullWidth
              open={showPopup}
              onClose={() => setShowPopup(!showPopup)}
            >
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", pb: "14px" }}>
                <Box sx={{ alignSelf: "flex-start" }}>
                  <TextField
                    onChange={(e) => (setLocalLocation(e.target.value))}
                    placeholder="Filter by location..."
                    defaultValue={localLocation}
                    border="0px"
                    InputProps={{
                      style: { fontSize: 14, color: "grey" },
                      sx: {
                        "& input": {
                          "&:hover": {
                            cursor: "pointer",
                          },
                          textOverflow: "ellipsis",
                        },
                        borderRadius: 0,
                        input: {
                          color: "secondary.darkgrey",
                          "&::placeholder": {
                            opacity: 1,
                          },
                        },
                      },
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      // width: "100%",
                      flexGrow: 1,
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Box>
                <Divider
                  orientation="horizontal"
                  flexItem
                />
                <FormControlLabel
                  sx={{ alignSelf: "flex-start", ml: "7px" }}
                  control={<Checkbox onChange={(e) => (setLocalFullTimeOnly(e.target.checked))} defaultChecked={localFullTimeOnly} />}
                  label={<Typography sx={{ fontSize: 14, fontWeight: "bold", color: "primary.verydarkblue" }}>Full Time Only</Typography>}
                />
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "90%",
                    boxShadow: "0",
                    // marginX: "10px",
                    "&:hover": {
                      backgroundColor: "primary.lightviolet",
                      boxShadow: "0",
                    },
                  }}
                  onClick={() => {handleClick(); setShowPopup(false);}}
                >
                  Search
                </Button>
              </Box>
            </Dialog>
          )}
          <Box
            sx={{ width: "80%", mx: "auto", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "secondary.main", borderRadius: "6px" }}
            my={-3.5}
          >
            <TextField
              onChange={(e) => (setLocalQuery(e.target.value))}
              placeholder="Filter by title..."
              defaultValue={localQuery}
              InputProps={{
                style: { fontSize: 14, color: "grey" },
                sx: {
                  "& input": {
                    "&:hover": {
                      cursor: "pointer",
                    },
                    textOverflow: "ellipsis",
                  },
                  borderRadius: 0,
                  input: {
                    color: "secondary.darkgrey",
                    "&::placeholder": {
                      opacity: 1,
                    },
                  },
                },
                endAdornment: (
                  <InputAdornment position="start">
                    <FilterAltIcon
                      onClick={() => setShowPopup(!showPopup)}
                      sx={{
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                      color="secondary.grey"
                    />
                    <SearchIcon
                    onClick={() => handleClick()}
                      sx={{
                        "&:hover": {
                          cursor: "pointer",
                        },
                        ml: "5px",
                        padding: "5px",
                        backgroundColor: "primary.main",
                        fontSize: "30px",
                        color: "#fff",
                        borderRadius: "5px",
                      }}
                      color="#ffffff"
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                // width: "100%",
                flexGrow: 3,
                "& fieldset": { border: "none" },
              }}
            />
          </Box>
        </>
      )}
    </>
  );

  // return (
  //   <>
  //     <Box
  //       sx={{ width: "80%", mx: "auto", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "secondary.main", borderRadius: "6px" }}
  //       my={-3.5}
  //     >
  //       <TextField
  //         onChange={(e) => (query = e.target.value)}
  //         placeholder="Filter by title..."
  //         InputProps={{
  //           style: { fontSize: 14, color: "grey" },
  //           sx: {
  //             "& input": {
  //               "&:hover": {
  //                 cursor: "pointer",
  //               },
  //               textOverflow: "ellipsis",
  //             },
  //             borderRadius: 0,
  //             input: {
  //               color: "secondary.darkgrey",
  //               "&::placeholder": {
  //                 opacity: 1,
  //               },
  //             },
  //           },
  //           endAdornment: (
  //             <InputAdornment position="start">
  //               <FilterAltIcon
  //                 sx={{
  //                   "&:hover": {
  //                     cursor: "pointer",
  //                   },
  //                 }}
  //                 color="secondary.grey"
  //               />
  //               <SearchIcon
  //                 sx={{
  //                   "&:hover": {
  //                     cursor: "pointer",
  //                   },
  //                   ml: "5px",
  //                   padding: "5px",
  //                   backgroundColor: "primary.main",
  //                   fontSize: "30px",
  //                   color: "#fff",
  //                   borderRadius: "5px",
  //                 }}
  //                 color="#ffffff"
  //               />
  //             </InputAdornment>
  //           ),
  //         }}
  //         sx={{
  //           // width: "100%",
  //           flexGrow: 3,
  //           "& fieldset": { border: "none" },
  //         }}
  //       />
  //     </Box>
  //   </>
  // );

  // return (
  //   <Box
  //     sx={{ width: "80%", mx: "auto", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "secondary.main", borderRadius: "6px" }}
  //     my={-3.5}
  //   >
  //     <TextField
  //       onChange={(e) => (query = e.target.value)}
  //       placeholder="Filter by title, companies, expertise..."
  //       InputProps={{
  //         style: { fontSize: 14, color: "grey" },
  //         sx: {
  //           "& input": {
  //             "&:hover": {
  //               cursor: "pointer",
  //             },
  //             textOverflow: "ellipsis",
  //           },
  //           borderRadius: 0,
  //           input: {
  //             color: "secondary.darkgrey",
  //             "&::placeholder": {
  //               opacity: 1,
  //             },
  //           },
  //         },
  //         startAdornment: (
  //           <InputAdornment position="start">
  //             <SearchIcon color="primary" />
  //           </InputAdornment>
  //         ),
  //       }}
  //       sx={{
  //         // width: "100%",
  //         flexGrow: 3,
  //         "& fieldset": { border: "none" },
  //       }}
  //     />
  //     <Divider
  //       orientation="vertical"
  //       flexItem
  //     />
  //     <TextField
  //       onChange={(e) => (location = e.target.value)}
  //       placeholder="Filter by location..."
  //       border="0px"
  //       InputProps={{
  //         style: { fontSize: 14, color: "grey" },
  //         sx: {
  //           "& input": {
  //             "&:hover": {
  //               cursor: "pointer",
  //             },
  //             textOverflow: "ellipsis",
  //           },
  //           borderRadius: 0,
  //           input: {
  //             color: "secondary.darkgrey",
  //             "&::placeholder": {
  //               opacity: 1,
  //             },
  //           },
  //         },
  //         startAdornment: (
  //           <InputAdornment position="start">
  //             <LocationOnIcon color="primary" />
  //           </InputAdornment>
  //         ),
  //       }}
  //       sx={{
  //         // width: "100%",
  //         flexGrow: 1,
  //         "& fieldset": { border: "none" },
  //       }}
  //     />
  //     <Divider
  //       orientation="vertical"
  //       flexItem
  //     />

  //     <Box
  //       sx={{
  //         // width: "100%",
  //         flexGrow: 3,
  //         display: "flex",
  //         justifyContent: "space-between",
  //         alignItems: "center",
  //         paddingX: "10px",
  //       }}
  //     >
  //       <Box sx={{ display: "flex", alignItems: "center" }}>
  //         <FormControlLabel
  //           control={<Checkbox onChange={(e) => (fulltimeonly = e.target.checked)} />}
  //           label={<Typography sx={{ fontSize: 14, fontWeight: "bold", color: "primary.verydarkblue" }}>Full Time Only</Typography>}
  //         />
  //         {/* <Typography ml="-20px">Full Time Only</Typography> */}
  //       </Box>
  //       <Button
  //         variant="contained"
  //         sx={{
  //           textTransform: "capitalize",
  //           width: "35%",
  //           boxShadow: "0",
  //           marginRight: "10px", // height: "40px",
  //           "&:hover": {
  //             backgroundColor: "primary.lightviolet",
  //             boxShadow: "0",
  //           },
  //         }}
  //         onClick={() => handleClick()}
  //       >
  //         Search
  //       </Button>
  //     </Box>
  //   </Box>
  // );
};
