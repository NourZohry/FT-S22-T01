import "./App.css";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { JobCardsContainer } from "./components/JobCardsContainer/JobCardsContainer";
import { DisplayJob } from "./components/DisplayJob/DisplayJob";

const font = "'Kumbh Sans', sans-serif";

const lightTheme = createTheme({
  mode: "light",
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: "#5964E0",
      lightviolet: "#939BF4",
      verydarkblue: "#19202D",
      midnight: "#121721",
    },
    secondary: {
      main: "#FFFFFF",
      lightgrey: "#F4F6F8",
      grey: "#9DAEC2",
      darkgrey: "#6E8098",
    },
    buttontest: {
      col: "#5964E0",
      // dark: "#FFFFFF" 
      bg: "#F4F6F8",
      hov: "#939BF4"
    },
    background: {
      default: "#F2F2F2",
    },
  },
});

const darkTheme = createTheme({
  mode: "dark",
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: "#5964E0",
      lightviolet: "#939BF4",
      verydarkblue: "#ffffff",
      midnight: "#121721",
    },
    secondary: {
      main: "#19202D",
      lightgrey: "#6E8098",
      grey: "#9DAEC2",
      darkgrey: "#6E8098",
    },
    buttontest: {
      // light: "#5964E0",
      col: "#FFFFFF",
      bg: "#6E8098",
      hov: "#9DAEC2"
    },
    background: {
      default: "#121721",
    },
  },
});

function App() {
  const [chosenJob, setChosenJob] = useState({});
  // const [theme, setTheme] = useState(true);

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [pagination, setPagination] = useState(0);

  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme") === 'true') {
      return true;
    }
    return false;
  });
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme])
  

  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <CssBaseline />

      <Box sx={{ width: "100%", height: "160px", borderBottomLeftRadius: "100px", bgcolor: "primary.main" }}>
        <Navbar
          setTheme={setTheme}
          theme={theme}
          setChosenJob={setChosenJob}
        />
      </Box>

      {chosenJob.title && <DisplayJob chosenJob={chosenJob} />}
      {!chosenJob.title && <SearchBar setQuery={setQuery} setLocation={setLocation} setFullTimeOnly={setFullTimeOnly} setPagination={setPagination}/>}
      {!chosenJob.title && <JobCardsContainer setChosenJob={setChosenJob} query={query} location={location} fullTimeOnly={fullTimeOnly} pagination={pagination} setPagination={setPagination}/>}
      {/* <SearchBar />
      <JobCardsContainer setChosenJob={setChosenJob}/> */}
    </ThemeProvider>
  );
}

export default App;
