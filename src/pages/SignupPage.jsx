import React, { useEffect } from "react";
import { signTypo } from "../global/style/styleStore/typoStyle";
import { btnStyle } from "../global/style/styleStore/buttonStyle";
import { textStyle } from "../global/style/styleStore/textStyle";
import { cardStyle } from "../global/style/styleStore/cardStyle";
import { useState } from "react";
import AuthOptions from "../global/reusableComponents/authOptions";
import { CircularProgress } from "@material-ui/core";
import { routes } from "../global/routes/route";
import { useNavigate } from "react-router-dom";

const {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  TextField,
  Button,
} = require("@material-ui/core");

const SignupPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loader, setLoader] = useState(false);

  let navigate = useNavigate();

  const handleChange = (event) => {
    const data = { ...user };
    data[event.target.name] = event.target.value;
    setUser(data);
    console.log(data);
  };

  // useEffect(() => {
  //   let checkUser = JSON.parse(localStorage.getItem("auth"));
  //   if (checkUser) {
  //     navigate(routes.home);
  //   } 
  // },[]);

  const registerUser = async () => {
    setLoader(true);
    // let response = await Http.post(user);
    // debugger;
    // navigate({appUrl});

    localStorage.setItem("auth", JSON.stringify(user));
    navigate(routes.home);
    window.reload();
    // if (response.length > 0) {
    //   navigate(appUrl);
    // }
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        style={{
          background: "whitesmoke",
          height: "100vh",
        }}
      >
        <Grid
          style={{
            background: "whitesmoke",
          }}
          items
          align="center"
          lg={6}
          md={6}
          sx={12}
          sm={12}
          xs={12}
        >
          <Card
            elevation={0}
            style={{
              background: "whitesmoke",
            }}
          >
            <CardContent>
              <Typography style={signTypo.h1}>
                Sign Up to <br />
                Save Notes
              </Typography>

              <Typography variant="h5" style={signTypo.p}>
                {" "}
                If you have an account <br />
                you can{" "}
                <Button
                  style={btnStyle.type2}
                  onClick={(event) => {
                    // navigate(routes.signIn);
                  }}
                >
                  {" "}
                  Login here
                </Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          items
          lg={6}
          md={6}
          sx={12}
          xs={12}
          sm={12}
          align="center"
          elevation={0}
        >
          <Card elevation={0} style={cardStyle.type1}>
            <CardContent>
              <TextField
                style={textStyle.type}
                name="name"
                onChange={(event) => {
                  handleChange(event);
                }}
                label="Fullname"
                variant="outlined"
                placeholder="Enter your Fullname"
              />{" "}
              <br />
              <TextField
                style={textStyle.type}
                onChange={(event) => {
                  handleChange(event);
                }}
                label="Email"
                name="email"
                variant="outlined"
                placeholder="Enter your Email"
              />{" "}
              <br />
              <TextField
                style={textStyle.type}
                label="Password"
                type="password"
                name="password"
                onChange={(event) => {
                  handleChange(event);
                }}
                variant="outlined"
                placeholder="Enter your Password"
              />
              <br />
              <Button style={btnStyle.type1} onClick={registerUser}>
                {loader ? (
                  <CircularProgress size={30} color="inherit" />
                ) : (
                  "SIGNUP"
                )}
              </Button>
              <AuthOptions />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SignupPage;
