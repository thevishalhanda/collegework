import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Notes from "../global/reusableComponents/Notes";
import {routes} from "../global/routes/route"

const Homepage = () => {
  const [data, setData] = useState("");
  let navigate = useNavigate();
  const [input, setInput] = useState("");
  const [store, setStore] = useState([
    {
      id: 0,
      date: "2-12-2002",
      content: "weyriewyiryweuiryyiuweryiweiyryweriwy",
    },
    {
      id: 0,
      date: "2-12-2002",
      content: "weyriewyiryweuiryyiuweryiweiyryweriwy",
    },

    {
      id: 0,
      date: "2-12-2002",
      content: "weyriewyiryweuiryyiuweryiweiyryweriwy",
    },
  ]);

//   useEffect(() => {
//     let getUser = JSON.parse(localStorage.getItem("auth"));
//     if (getUser) {
//       setData(getUser.name);
//     } else {
//       setData("default");
//     }
//   });

  const logOut = () => {
      
    localStorage.removeItem("auth");
    navigate(routes.home)

  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        style={{
          background: "fff",
        }}
      >
        <Grid items xs={12} sx={12} md={12} sm={12} lg={10} align="center">
          <Card elevation={0}>
            <CardContent>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  marginTop: "5%",
                }}
              >
                Welcome to the Pocket Note {data} !
              </Typography>

              <Typography
                variant="h7"
                style={{
                  marginTop: "2%",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Thanks for using our application , become our customer {data} !
              </Typography>
              <br />
              <Button
                style={{
                  background: "black",
                  color: "white",
                  fontFamily: "Poppins",
                  width: "20%",
                  marginTop: "2%",
                  height: "40px",
                  borderRadius: "20px",
                }}
              >
                {" "}
                Signout{" "}
              </Button>

              <Typography
                variant="h4"
                style={{
                  textAlign: "left",
                  //   fontFamily:"Poppins",
                  fontFamily:
                    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
                  fontWeight: "bold",
                  marginTop: "4%",
                }}
              >
                {" "}
                Notes
              </Typography>
              <input
                onChange={(event) => {
                  handleChange(event);
                }}
                style={{
                  width: "100%",
                  height: "6.7vh",
                  marginTop: "2%",
                  padding: "2px 2px 2px 2px",
                  textAlign: "center",
                  borderRadius: "20px",
                  fontSize: "20px",
                  fontFamily:
                    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
                }}
              ></input>
              {store.map((item) => {
                return (
                  <>
                    <Notes 
                    id = {item.id}
                    name = {item.name}
                    content = {item.content}
                
                    />
                  </>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
