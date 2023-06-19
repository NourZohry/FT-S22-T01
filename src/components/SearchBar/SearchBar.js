import { Box, Button, Checkbox, Divider, FormControlLabel, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <Box
      sx={{ width: "80%", mx: "auto", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "secondary.main", borderRadius: "6px" }}
      my={-3.5}
    >
      <TextField
        placeholder="Filter by title, companies, expertise..."
        InputProps={{
          style: { fontSize: 14, color: "grey" },
          sx: {
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
          width: "100%",
          "& fieldset": { border: "none" },
        }}
      />
      <Divider
        orientation="vertical"
        flexItem
      />
      <TextField
        placeholder="Filter by location..."
        border="0px"
        InputProps={{
          style: { fontSize: 14, color: "grey" },
          sx: {
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
          width: "100%",
          "& fieldset": { border: "none" },
        }}
      />
      <Divider
        orientation="vertical"
        flexItem
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label={<Typography sx={{ fontSize: 14, fontWeight: "bold", color: "primary.verydarkblue" }}>Full Time Only</Typography>}
        />
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", width: "35%", boxShadow: "0" }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};
