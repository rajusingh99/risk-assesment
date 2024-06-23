
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Popover, Select, TextField, Typography  } from '@mui/material';
import React, { useState } from 'react';
import { Constant } from '../../../../constant/sidebarLinks';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const TopRoutes = ({ route }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [tag_key, setTagKey] = React.useState('');

  const handleChange = (event) => {
    setTagKey(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    const data = new FormData(e.currentTarget)
    
    const Address = {
      risk_scenario : data.get('risk_scenario'),
      risk_description : data.get('risk_description'),
      risk_field2 : data.get('risk_field2'),
      risk_field1 : data.get('risk_field1'),
      tag_value : data.get('tag_value'),
      tag_key : tag_key,

    }
    console.log(Address,"Address")
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h3>{route.title}</h3>
      </div>

      <div className='flex' style={{ alignItems: 'end', justifyContent: 'end' }}>
        {route?.subtitle === 'risk-scenario' && 
          <Button 
            variant="contained" 
            aria-describedby={id} 
            onClick={handleClick} 
            sx={{ textTransform: "capitalize", backgroundColor: Constant.bgColor, ":hover": { backgroundColor: Constant.bgColor } }}
          >
            Add Risk Scenario
          </Button>
        }

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          PaperProps={{
            style: { 
              position: 'fixed', 
              transform: 'translate(-50%, 10%)', 
              maxHeight: '100vh', 
              maxWidth: '100vh'
            },
          }}
        >
          <Box className="p-8">
               <Box className="flex p-3" sx={{justifyContent:'space-between',alignItems:'center'}}>
                  <Typography variant='h6'>Add Risk Scenario</Typography>
                  <CloseOutlinedIcon onClick={handleClose} className='cursor-pointer'/>
               </Box>

               <form onSubmit={handleSubmit}>
                    <Grid container>
                      <Grid item xs={12}  mb={3}>
                          <TextField required id='risk_scenario' name='risk_scenario' label='Risk Scenario' fullWidth autoComplete='given-name'/>
                      </Grid>

                      <Grid item xs={12}  mb={3}>
                          <TextField required id='risk_description' name='risk_description' label='Risk Description' fullWidth autoComplete='given-name'/>
                      </Grid>

                      <Grid container spacing={2}>
                          <Grid item xs={12} sm={6} mb={3} >
                              <TextField  id='risk_field1' name='risk_field1' label='Risk Field 1' fullWidth autoComplete='given-name' />
                          </Grid>

                          <Grid item xs={12} sm={6} mb={3}>
                              <TextField  id='risk_field2' name='risk_field2' label='Risk Field 2' fullWidth autoComplete='given-name' />
                          </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} mb={3}>
                            {/* <TextField  id='tag_key' name='tag_key' label='Key' fullWidth autoComplete='given-name'/> */}
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Key</InputLabel>
                                <Select
                                  labelId="tag_key"
                                  id="tag_key"
                                  value={tag_key}
                                  label="Key"
                                  onChange={handleChange}
                                >
                                  {
                                    Constant.Tag_key.map((item)=>
                                    <MenuItem value={item.value}>{item.key}</MenuItem>
                                    )
                                  }
                                </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6} mb={3}>
                            <TextField   id='tag_value' name='tag_value' label='Value' fullWidth autoComplete='shipping postal-code'/>
                        </Grid>
                      </Grid>

                      <Grid item xs={12}>
                          <Box className="flex items-center justify-between">
                              <Box>
                                <Button variant="outlined" color="error" onClick={handleClose} sx={{textTransform:'capitalize',}}>Cancel</Button>
                              </Box>

                              <Box className="flex items-center justify-between gap-5" >
                                <Button variant="outlined" sx={{textTransform:'capitalize',}}>Save as Draft</Button>
                                <Button type='submit' size='large' variant='contained' sx={{ backgroundColor:Constant.bgColor,':hover':{backgroundColor:Constant.bgColor}}}>  Publish</Button>
                              </Box>
                          </Box>
                      </Grid>

                    </Grid>
                  </form>
          </Box>
        </Popover>

      </div>
    </div>
  );
};

export default TopRoutes;
