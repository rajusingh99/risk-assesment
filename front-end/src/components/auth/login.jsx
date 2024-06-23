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
  FormControlLabel,
  Switch,
  Grid,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Constant } from "../constant/sidebarLinks";
import CopyRight from "../dashboard/Pages/Admin/components/CopyRight";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
                  Log in to bluOcean
                </Typography>
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
                Login
                </Button>
                <Box className="">
                  <Typography className="opacity-50">Want to know more about BluOcean? 
                  </Typography>
                    <a href={'/signup'} style={{color:Constant.bgColor, }}>Sign Up</a>
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Grid>
        <CopyRight/>
    </Grid>
  );
};

export default Login;
