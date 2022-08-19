import React from 'react'
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


 function Header() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className='Header'>

<Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h10" component="div" sx={{ flexGrow: 1}}>
          <h1> Domino's Pizza </h1>
          </Typography>
          <Button color="inherit">MY ACCOUNT</Button>
        </Toolbar>
      </AppBar>
    </Box>



 <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="EVERYDAY VALUE" />
        <Tab value="two" label="BESTSELLERS" />
        <Tab value="three" label="NEW LAUNCHES" />
        <Tab value="four" label="PARATHA PIZZA" />
        <Tab value="five" label="VEG PIZZA" />
        <Tab value="six" label="BEVERAGES" />
        <Tab value="seven" label="NON-VEG-PIZZA" />
        <Tab value="eight" label="CHICKEN LOVERS PIZZA" />
        <Tab value="nine" label="SPECIALITY CHICKEN" />
        <Tab value="ten" label="SIDES" />
        <Tab value="eleven" label="PIZZA MANIA" />
        <Tab value="twelve" label="MEAL FOR 1" />
        <Tab value="thirteen" label="MEAL FOR 2" />
        <Tab value="fourteen" label="MEAL FOR 4" />
        <Tab value="fifteen" label="PARTY COMBOS" />
      </Tabs>
    </Box>
    </div>
    
      
  );
}
export default Header;   

    
  

