import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
      contrastText: "#000",
    },
  },
});

const Form = () => {
  return (
    <div>
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
            <Typography component="legend">Password Length : {0}</Typography>
          </Grid>
          <Grid item>
            <Slider
              size="medium"
              defaultValue={16}
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
              control={<Checkbox defaultChecked />}
              label="abc"
            />
            <FormControlLabel control={<Checkbox />} label="ABC" />
            <FormControlLabel control={<Checkbox />} label="123" />
            <FormControlLabel control={<Checkbox />} label="^?#" />
          </Grid>
        </Box>
        <Box>
          <Grid item>
            <Typography component="legend">Password Rating :</Typography>
          </Grid>
          <Grid item>
            <Rating name="read-only" value={0} readOnly />
          </Grid>
        </Box>
      </Grid>
      <TextField
        id="outlined-basic"
        label="Generated Password"
        variant="outlined"
        sx={{ mt: 5, width: 1 }}
      />
    </div>
  );
};
export default Form;
