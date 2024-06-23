import React, { useCallback, useState } from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Constant } from "../constant/sidebarLinks";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firsName:"",
    lastName:"",
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = useCallback((e, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  }, []);

  const handleSign = () => {
    navigate("/");
  };

  return (
     <Grid container m={2}>
        <Grid item xs={12} lg={6} sx={{backgroundColor:"#D9D9D9",width:"70%",borderRadius:'5px'}}>

        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              minHeight: "93vh",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 0",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2rem",
                width: "24rem",
                maxWidth: "95%",
                zIndex: "1",
              }}
            >
              <Stack spacing={2}>
                <Typography align="center" component="h1" variant="h5" sx={{ mb: 1 ,color:"#434EB3"}}>
                  SignUp in bluOcean
                </Typography>
                <TextField
                  size="small"
                  value={formData.firsName}
                  onChange={(e) => {
                    handleChange(e, "firsName");
                  }}
                  sx={{pb:'15px'}}
                  name="firsName"
                  label="First Name"
                  variant="outlined"
                  required
                />
                <TextField
                  size="small"
                  value={formData.lastName}
                  onChange={(e) => {
                    handleChange(e, "lastName");
                  }}
                  sx={{pb:'15px'}}
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  required
                />
                <TextField
                  size="small"
                  value={formData.email}
                  onChange={(e) => {
                    handleChange(e, "email");
                  }}
                  sx={{pb:'15px'}}
                  name="email"
                  label="Email"
                  variant="outlined"
                  required
                />
                <TextField
                  size="small"
                  name="password"
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => {
                    handleChange(e, "password");
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                      <Link
                        to="/forgot-password"
                        align="right"
                        variant="subtitle2"
                        underline="hover"
                        sx={{
                          cursor: "pointer",
                        }}
                      >
                        Forgot password?
                      </Link>
                <Button
                  onClick={handleSign}
                  variant="contained"
                  disabled={rememberMe ? false : true}
                  sx={{
                    backgroundColor: Constant.bgColor,
                    "&:hover": {
                      backgroundColor:  Constant.bgColor,
                    },
                    textTransform:'capitalize'
                  }}
                >
                SignUp  
                </Button>
                <Box className="">
                  <Typography className="opacity-50">Want to know more about BluOcean? 
                  </Typography>
                    <a href={'/login'} style={{color:Constant.bgColor, }}>Login</a>
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Grid>
    </Grid>
  );
};

export default Signup;
