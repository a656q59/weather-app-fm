import React, { useState, useMemo, useEffect } from "react";
import {
  Autocomplete,
  TextField,
  Button,
  Box,
  CircularProgress
} from "@mui/material";
import axios from "axios";
import debounce from "lodash/debounce";

export default function SearchBox() {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // 🔹 Fetch places from Nominatim
  const fetchPlaces = async (query) => {
    if (!query) return;

    setLoading(true);

    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: query,
            format: "json",
            addressdetails: 1,
            limit: 5
          },
          headers: {
            "Accept-Language": "en"
          }
        }
      );

      setOptions(response.data);
    } catch (error) {
      console.error("Error fetching places:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Debounce wrapper (created once)
  const debouncedFetch = useMemo(
    () => debounce((query) => fetchPlaces(query), 500),
    []
  );

  // 🔹 Cleanup to avoid memory leaks
  useEffect(() => {
    return () => {
      debouncedFetch.cancel();
    };
  }, [debouncedFetch]);

  // 🔹 Handle Search Button
  const handleSearch = async () => {
    const query = selectedPlace?.display_name || inputValue;
    if (!query) return;

    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: query,
            format: "json",
            limit: 1
          }
        }
      );

      if (response.data.length > 0) {
        const place = response.data[0];
        setResult({
          lat: place.lat,
          lon: place.lon
        });
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <Box sx={{ width: 600 }}>
      <Box sx={{ display: "flex", gap: 2, }}>
        <Autocomplete
          fullWidth
          options={options}
          getOptionLabel={(option) => option.display_name || ""}
          loading={loading}
          onInputChange={(event, value) => {
            setInputValue(value);
            debouncedFetch(value); // ✅ use debounced function
          }}
          onChange={(event, value) => {
            setSelectedPlace(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search places"
              variant="outlined"
              sx={{
                backgroundColor: "neutral.800",
                borderRadius: "12px",
                color: "common.white"
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading && <CircularProgress size={20} />}
                    {params.InputProps.endAdornment}
                  </>
                )
              }}
            />
          )}
        />

        <Button variant="contained" onClick={handleSearch} sx={{ borderRadius: "12px", padding: "0px 50px" }}>
          Search
        </Button>
      </Box>

      {/* {result && (
        <Box sx={{ mt: 3 }}>
          <div><strong>Latitude:</strong> {result.lat}</div>
          <div><strong>Longitude:</strong> {result.lon}</div>
        </Box>
      )} */}
    </Box>
  );
}
