import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const speedOfLight = 299792458;

const calculateVelocityFractionOfSpeedOfLight = (
  currentTime: number,
  otherTime: number,
): number => {
  const ratio = otherTime / currentTime;
  if (ratio === 1) {
    return 0;
  }
  return Math.sqrt(1 - 1 / (ratio * ratio));
};

const Calculator = () => {
  const [currentTime, setCurrentTime] = React.useState<undefined | number>(
    undefined,
  );
  const [otherTime, setOtherTime] = React.useState<undefined | number>(
    undefined,
  );

  const velocityFraction =
    currentTime && otherTime
      ? calculateVelocityFractionOfSpeedOfLight(currentTime, otherTime)
      : undefined;

  return (
    <Paper sx={{ height: "100%" }}>
      <Container sx={{ height: "100%" }}>
        <Stack spacing={3} sx={{ height: "100%" }}>
          <Typography variant="h2">Velocity Calculator</Typography>
          <TextField
            label="Time observed by you"
            value={currentTime}
            onChange={(event) =>
              event.target.value
                ? setCurrentTime(Number(event.target.value))
                : void 0
            }
          />
          <TextField
            label="Time observed by your colleague"
            value={otherTime}
            onChange={(event) =>
              event.target.value
                ? setOtherTime(Number(event.target.value))
                : void 0
            }
          />
          <TextField
            label="Velocity of your colleague"
            value={
              velocityFraction !== undefined
                ? speedOfLight * velocityFraction
                : undefined
            }
            variant="outlined"
            inputProps={{
              endAdornment: <InputAdornment position="end">m/s</InputAdornment>,
              readOnly: true,
            }}
            InputLabelProps={{ shrink: velocityFraction !== undefined }}
          />
        </Stack>
      </Container>
    </Paper>
  );
};

const Introduction = () => (
  <Container>
    <Stack spacing={3}>
      <Typography variant="h2">How fast is your colleague moving?</Typography>
      <Typography>TODO: Add some motivating text here.</Typography>
    </Stack>
  </Container>
);

const App = () => (
  <>
    <CssBaseline />
    <Grid
      container
      sx={{ height: "100%", mx: "auto" }}
      spacing={1}
      maxWidth="xl"
      justifyContent="center"
    >
      <Grid item xs={8}>
        <Introduction />
      </Grid>
      <Grid item xs={4}>
        <Calculator />
      </Grid>
    </Grid>
  </>
);

export default App;
