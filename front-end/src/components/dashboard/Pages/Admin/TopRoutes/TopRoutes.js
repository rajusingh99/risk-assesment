
import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Popover, Select, Switch, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Constant } from '../../../../constant/sidebarLinks';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const TopRoutes = ({ route }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked,SetChecked] = useState(true);
  const [tags, setTags] = useState([{ key: '', value: '' }]);
  const [save_draft,setSaveAsDraft] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTagChange = (index, field, value) => {
    const newTags = tags.map((tag, i) => {
      if (i === index) {
        return { ...tag, [field]: value };
      }
      return tag;
    });
    setTags(newTags);
  };

  const handleAddTag = () => {
    setTags([...tags, { key: '', value: '' }]);
  };

  const handleDeleteTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let tags = tags.filter(tag => tag.key && tag.value)
    const risk = {
      risk_scenario: data.get('risk_scenario'),
      risk_description: data.get('risk_description'),
      risk_field1: data.get('risk_field1'),
      risk_field2: data.get('risk_field2'),
      tags: tags, 
      status:checked,
      save_as_draft: save_draft
    }
    const Address = {
      risk,tags
    };

    console.log(Address, "Address");
  };
  const handleChange =()=>{
   SetChecked((checked)=>!checked)
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
              maxWidth: '100vh',
            },
          }}
        >
          <Box className="p-8">
            <Box className="flex p-3" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='h6'>Add Risk Scenario</Typography>
              <CloseOutlinedIcon onClick={handleClose} className='cursor-pointer' />
            </Box>

            <form onSubmit={handleSubmit}>
              <Grid container sx={{ maxHeight: '60vh', overflowY: 'auto', pr: 2, pt: 2, boxShadow: "initial" }}>
                <Grid item xs={12} mb={1} className="flex items-center justify-start gap-3">
                  <Typography>Status:</Typography>
                    <FormGroup>
                        <FormControlLabel sx={{color:checked? "#157A4E" : "",}} control={<Switch checked={checked}  onChange={handleChange} sx={{'& .MuiSwitch-switchBase.Mui-checked': { color: '#157A4E',},  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {  backgroundColor: '#157A4E',  },  }} />} label={checked ?"Enabled":"Disabled"}   />
                   </FormGroup>
                </Grid>
                <Grid item xs={12} mb={3}>
                  <TextField required id='risk_scenario' name='risk_scenario' label='Risk Scenario' fullWidth autoComplete='given-name' />
                </Grid>

                <Grid item xs={12} mb={3}>
                  <TextField required id='risk_description' name='risk_description' label='Risk Description' fullWidth autoComplete='given-name' />
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} mb={3}>
                    <TextField id='risk_field1' name='risk_field1' label='Risk Field 1' fullWidth autoComplete='given-name' />
                  </Grid>

                  <Grid item xs={12} sm={6} mb={3}>
                    <TextField id='risk_field2' name='risk_field2' label='Risk Field 2' fullWidth autoComplete='given-name' />
                  </Grid>
                </Grid>

                <Grid item xs={12} >
                    {tags.map((tag, index) => (
                      <Grid container spacing={2} key={index} alignItems="center" mb={3}>
                        <Grid item xs={5}>
                          <FormControl fullWidth>
                            <InputLabel id={`tag_key_label_${index}`}>Key</InputLabel>
                            <Select
                              labelId={`tag_key_label_${index}`}
                              id={`tag_key_${index}`}
                              value={tag.key}
                              label="Key"
                              onChange={(e) => handleTagChange(index, 'key', e.target.value)}
                            >
                              {Constant.Tag_key.map((item, idx) =>
                                <MenuItem key={idx} value={item.value}>{item.key}</MenuItem>
                              )}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            id={`tag_value_${index}`}
                            value={tag.value}
                            label="Value"
                            fullWidth
                            onChange={(e) => handleTagChange(index, 'value', e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Button variant="text" color="error" onClick={() => handleDeleteTag(index)}>
                            <DeleteIcon />
                          </Button>
                        </Grid>
                      </Grid>
                    ))}
                  
                </Grid>

                <Grid item xs={12} mb={2}>
                  <Button variant="text" onClick={handleAddTag} sx={{ color: Constant.bgColor }}>
                    <AddIcon sx={{ color: Constant.bgColor }} /> Add New Key
                  </Button>
                </Grid>
                
                <Grid item xs={12}>
                  <Box className="flex items-center justify-between">
                    <Box>
                      <Button variant="outlined" color="error" onClick={handleClose} sx={{ textTransform: 'capitalize', }}>Cancel</Button>
                    </Box>

                    <Box className="flex items-center justify-between gap-5">
                      <Button variant="outlined" sx={{ textTransform: 'capitalize', }}>Save as Draft</Button>
                      <Button type='submit' size='large' variant='contained' sx={{ backgroundColor: Constant.bgColor, ':hover': { backgroundColor: Constant.bgColor } }}>Publish</Button>
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

