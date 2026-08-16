import { useState, useMemo, useEffect, useRef } from "react";
import {
  Autocomplete,
  TextField,
  Button,
  Box,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import debounce from "lodash/debounce";
import searchIcon from "../assets/images/icon-search.svg";

const GEOCODE_URL = "https://geocoding-api.open-meteo.com/v1/search";

function getPlaceLabel(place) {
  if (!place) return "";
  return [place.name, place.admin1, place.country].filter(Boolean).join(", ");
}

export default function SearchBox({ onSearch }) {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const abortRef = useRef(null);

  const fetchPlaces = async (query) => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setOptions([]);
      setLoading(false);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);

    try {
      const response = await axios.get(GEOCODE_URL, {
        params: {
          name: trimmed,
          count: 5,
          language: "en",
          format: "json",
        },
        signal: controller.signal,
      });

      setOptions(response.data?.results ?? []);
    } catch (error) {
      if (!axios.isCancel(error) && error.name !== "CanceledError") {
        console.error("Error fetching places:", error);
        setOptions([]);
      }
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  };

  const debouncedFetch = useMemo(
    () => debounce((query) => fetchPlaces(query), 400),
    [],
  );

  useEffect(() => {
    return () => {
      debouncedFetch.cancel();
      abortRef.current?.abort();
    };
  }, [debouncedFetch]);

  const resolvePlace = async () => {
    if (selectedPlace?.latitude != null && selectedPlace?.longitude != null) {
      return selectedPlace;
    }

    const query = inputValue.trim();
    if (!query) return null;

    const response = await axios.get(GEOCODE_URL, {
      params: {
        name: query,
        count: 1,
        language: "en",
        format: "json",
      },
    });

    return response.data?.results?.[0] ?? null;
  };

  const handleSearch = async () => {
    setSearching(true);

    try {
      const place = await resolvePlace();
      if (!place) return;

      const payload = {
        name: getPlaceLabel(place),
        lat: place.latitude.toFixed(2),
        lon: place.longitude.toFixed(2),
      };
      onSearch?.(payload);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    } finally {
      setSearching(false);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600 }}>
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          alignItems: "stretch",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Autocomplete
          fullWidth
          options={options}
          filterOptions={(x) => x}
          getOptionLabel={getPlaceLabel}
          isOptionEqualToValue={(option, value) =>
            option.id === value.id &&
            option.latitude === value.latitude &&
            option.longitude === value.longitude
          }
          loading={loading}
          value={selectedPlace}
          inputValue={inputValue}
          onInputChange={(_event, value, reason) => {
            setInputValue(value);
            if (reason === "input") {
              debouncedFetch(value);
            }
            if (reason === "clear") {
              setOptions([]);
              setSelectedPlace(null);
            }
          }}
          onChange={(_event, value) => {
            setSelectedPlace(value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleSearch();
            }
          }}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: "neutral.800",
                color: "neutral.0",
                mt: 1,
                borderRadius: "12px",
              },
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search for a city, e.g., New York"
              variant="outlined"
              sx={{
                backgroundColor: "neutral.800",
                borderRadius: "12px",
                "& .MuiOutlinedInput-root": {
                  color: "neutral.0",
                  borderRadius: "12px",
                  minHeight: 56,
                  pr: 1,
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "neutral.600",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "neutral.300",
                  opacity: 1,
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start" sx={{ ml: 1, mr: 0.5 }}>
                    <Box
                      component="img"
                      src={searchIcon}
                      alt=""
                      sx={{ width: 18, height: 18 }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress color="inherit" size={18} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />

        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={searching || (!inputValue.trim() && !selectedPlace)}
          sx={{
            borderRadius: "12px",
            px: { xs: 3, sm: 4 },
            minHeight: 56,
            width: { xs: "100%", sm: "auto" },
            flexShrink: 0,
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "primary.dark",
            },
          }}
        >
          {searching ? (
            <CircularProgress size={22} color="inherit" />
          ) : (
            "Search"
          )}
        </Button>
      </Box>
    </Box>
  );
}
