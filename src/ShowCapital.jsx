import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function ShowCapital(capital) {
  if (capital?.cap[0]) {
    return (
      <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={capital.cap[0]?.flags?.png}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              fontSize="17px"
            >
              Name of the country is:{" "}
              <span style={{ color: "blue" }}>
                {capital.cap[0]?.name?.common}
              </span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span style={{ fontWeight: "600" }}></span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  } else {
    return "";
  }
}

export default ShowCapital;
