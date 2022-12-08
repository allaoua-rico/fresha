import { Autocomplete, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];
const options = top100Films.map((option) => {
  const firstLetter = option.title[0].toUpperCase();
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
    ...option,
  };
});

export default function HeaderSearch() {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      id="grouped-demo"
      /* These two lines make the right margin inside the autocomplete dissapear
       Its is a bug that appeared on v5. */
      disableClearable
      forcePopupIcon={false}
      //
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title || ""}
      sx={{
        maxWidth: "500px",
        width: "100%",
        p: 0,
      }}
      style={{ p: 0 }}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            "& .MuiOutlinedInput-root": {
              pr: 0,
              pl: 1,
              py: 0,
              "& fieldset": {
                borderColor: "#d5d7da",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#d5d7da",
                borderWidth: "1px",
              },
            },
          }}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <GrSearch className="w-5 h-5" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                {inputValue !== "" && (
                  <TiDelete
                    onClick={() => {
                      setInputValue("");
                      setValue("");
                    }}
                    className="hover:cursor-pointer w-6 h-6"
                  />
                )}
              </InputAdornment>
            ),
          }}
          placeholder="Search for a service or venue"
        />
      )}
    />
  );
}
