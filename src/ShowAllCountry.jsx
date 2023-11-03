import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import ShowCapital from "./ShowCapital";

function ShowAllCountry(datas) {
  let whiteColor = "#fff";
  const [bgColor, setBgColor] = useState(whiteColor);

  const obValues = Object.values(datas);
  const [capital, setCapital] = useState([]);

  const findCapital = (event) => {
    const value_text = event.target.value;
    const find_capital = obValues.filter(
      (value) => value.capital == value_text
    );
    setCapital(find_capital);
  };
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
      }}
    >
      <nav className="surf-nav">
        <ul>
          <li>
            <a href="#" className="h-name">
              Where you at ?
            </a>
          </li>
          <li></li>
        </ul>
      </nav>

      <div className="samll_nav">
        <TextField
          id="outlined-basic"
          label="Search counrty by capital...."
          variant="filled"
          sx={{
            width: "30vw",
          }}
          style={{
            margin: "50px",
          }}
          inputProps={{ style: { fontSize: 25 } }} // font size of input text
          InputLabelProps={{ style: { fontSize: 25 } }} // font size of input label
          type="text"
          onChange={findCapital}
        />
        <ShowCapital cap={capital} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "75px",
          justifyContent: "center",
          marginTop: "80px",
        }}
      >
        {obValues.map((obValue) => (
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={obValue.flags.png}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {obValue.name.common}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    fontWeight={500}
                  >
                    <span style={{ fontWeight: "700" }}>Populations</span> :{" "}
                    {obValue.population}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.primary"
                    fontWeight={500}
                  >
                    <span style={{ fontWeight: "700" }}>Region :</span>{" "}
                    {obValue.region}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.primary"
                    fontWeight={500}
                  >
                    <span style={{ fontWeight: "700" }}>Capital</span> :{" "}
                    {obValue.capital}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowAllCountry;
