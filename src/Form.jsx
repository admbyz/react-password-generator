import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
      contrastText: "#fff",
    },
  },
});

const Form = ({ password, passChars, setPassChars, passRating }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid
          container
          gap={3}
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          sx={{ mt: 5 }}
        >
          <Box>
            <Grid item>
              <Typography component="legend">
                Password Length : {passChars.length}
              </Typography>
            </Grid>
            <Grid item>
              <Slider
                onChange={(e) =>
                  setPassChars({ ...passChars, length: e.target.value })
                }
                value={passChars.length ? passChars.length : 0}
                size="medium"
                defaultValue={passChars.length}
                max={50}
                min={4}
                color="secondary"
                valueLabelDisplay="off"
                sx={{ width: 200 }}
              />
            </Grid>
          </Box>
          <Box>
            <Grid item>
              <Typography component="legend">Characters used :</Typography>
            </Grid>
            <Grid item>
              <FormControlLabel
                onChange={(e) => {
                  setPassChars({ ...passChars, lower: !passChars.lower });
                  e.target.value.checked;
                }}
                control={<Checkbox checked={passChars.lower} />}
                label="abc"
              />
              <FormControlLabel
                onChange={(e) => {
                  setPassChars({ ...passChars, upper: !passChars.upper });
                  e.target.value.checked;
                }}
                control={<Checkbox checked={passChars.upper} />}
                label="ABC"
              />
              <FormControlLabel
                onChange={(e) => {
                  setPassChars({ ...passChars, numeric: !passChars.numeric });
                  e.target.value.checked;
                }}
                control={<Checkbox checked={passChars.numeric} />}
                label="123"
              />
              <FormControlLabel
                onChange={(e) => {
                  setPassChars({ ...passChars, special: !passChars.special });
                  e.target.value.checked;
                }}
                control={<Checkbox checked={passChars.special} />}
                label="^?#"
              />
            </Grid>
          </Box>
          <Box>
            <Grid item>
              <Typography component="legend">Password Rating :</Typography>
            </Grid>
            <Grid item>
              <Rating
                name="read-only"
                precision={0.5}
                value={passRating}
                readOnly
              />
            </Grid>
          </Box>
        </Grid>
        <TextField
          value={password}
          id="outlined-basic"
          label="Generated Password"
          InputProps={{
            readOnly: true,
          }}
          sx={{ mt: 5, width: 1 }}
        />
      </ThemeProvider>
    </div>
  );
};
export default Form;
