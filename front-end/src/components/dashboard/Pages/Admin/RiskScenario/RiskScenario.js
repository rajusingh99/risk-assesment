import { Box, FormControl, InputLabel, MenuItem, Select, TextField,InputAdornment, Button  } from '@mui/material'
import React from 'react'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'
import ScenarioCard from './components/ScenarioCard'
import { Constant } from '../../../../constant/sidebarLinks'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const RiskScenario = () => {
  const [sort, setSort] = React.useState('');
    const route={
       title:"Library",
       subtitle:"risk-scenario"
    }

    const handleSortChange = (event) => {
      setSort(event.target.value);
    };
  return (
    <Box sx={{display:'flex'}} >
    <SideBar/>
      <Box  component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
      <TopRoutes route={route} />
         <Box className="flex" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p:'16px 0px' }}>
              <TextField
                label="Search by keywords"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            <Box className="flex items-center justify-center gap-5">
              <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Sort by</InputLabel>
                <Select
                  value={sort}
                  onChange={handleSortChange}
                  label="Sort: Risk ID"
                >
                  <MenuItem value=""> <em>None</em></MenuItem>
                  <MenuItem value="asc">Ascending</MenuItem>
                  <MenuItem value="desc">Descending</MenuItem>
                </Select>
              </FormControl>

              <Button variant="outlined" sx={{textTransform:'capitalize',}}>Filter <FilterAltOutlinedIcon/></Button>
            </Box>
        </Box>
      {
        Constant.RiskScenario.map((item,index)=><ScenarioCard item={item} index={index} />)
      }
      </Box>
  </Box>
  )
}

export default RiskScenario
