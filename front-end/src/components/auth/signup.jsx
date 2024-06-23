
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
import axios from 'axios';  // Import Axios
import { Constant } from "../constant/sidebarLinks";
import CopyRight from "../dashboard/Pages/Admin/components/CopyRight";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = useCallback((e, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        navigate("/library");
      } else {
        console.error("Registration failed:", response.data);
        alert("Registration failed: " + response.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Grid container m={2}>
      <Grid item xs={12} lg={6} sx={{ backgroundColor: "#D9D9D9", width: "70%", borderRadius: '5px' }}>
        {/* Left side content */}
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
            onSubmit={handleSignUp}
            sx={{
              p: "2rem",
              width: "24rem",
              maxWidth: "95%",
              zIndex: "1",
            }}
          >
            <Stack spacing={2}>
              <Typography align="center" component="h1" variant="h5" sx={{ mb: 1, color: "#434EB3" }}>
                SignUp in bluOcean
              </Typography>
              <TextField
                size="small"
                value={formData.firstName}
                onChange={(e) => {
                  handleChange(e, "firstName");
                }}
                sx={{ pb: '15px' }}
                name="firstName"
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
                sx={{ pb: '15px' }}
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
                sx={{ pb: '15px' }}
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
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: Constant.bgColor,
                  "&:hover": {
                    backgroundColor: Constant.bgColor,
                  },
                  textTransform: 'capitalize'
                }}
              >
                SignUp
              </Button>
              <Box className="">
                <Typography className="opacity-50">Want to know more about BluOcean? </Typography>
                <Link to="/login" style={{ color: Constant.bgColor }}>Login</Link>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Grid>
      <CopyRight />
    </Grid>
  );
};

export default Signup;

