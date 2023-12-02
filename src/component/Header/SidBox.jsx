import {  IconButton, List, ListItem, ListItemButton,ListItemIcon, ListItemText, Tooltip, Typography, styled, useTheme } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MuiDrawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QuizIcon from '@mui/icons-material/Quiz';
import BarChartIcon from '@mui/icons-material/BarChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapIcon from '@mui/icons-material/Map';
import { pink,red,lightBlue,orange,grey,lightGreen,indigo,green,yellow,lime, purple} from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;


const openedMixin = (theme) => ({
 width: drawerWidth,
 transition: theme.transitions.create('width', {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
 }),
 overflowX: 'hidden',
});


const closedMixin = (theme) => ({
 transition: theme.transitions.create('width', {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.leavingScreen,
 }),
 overflowX: 'hidden',
 width: `calc(${theme.spacing(7)} + 1px)`,
 [theme.breakpoints.up('sm')]: {
   width: `calc(${theme.spacing(8)} + 1px)`,
 },
});


const DrawerHeader = styled('div')(({ theme }) => ({
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'flex-end',
 padding: theme.spacing(0, 1),
 // necessary for content to be below app bar
 ...theme.mixins.toolbar,
}));


const Drawer = styled( MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
 // @ts-ignore
 ({ theme, open }) => ({
   width: drawerWidth,
   flexShrink: 0,
   whiteSpace: 'nowrap',
   boxSizing: 'border-box',
   ...(open && {
     ...openedMixin(theme),
     '& .MuiDrawer-paper': openedMixin(theme),
   }),
   ...(!open && {
     ...closedMixin(theme),
     '& .MuiDrawer-paper': closedMixin(theme),
   }),
 }),
);




const Array1=[
  { text:"Dashboard",icon:<HomeIcon fontSize="medium" 
   sx={{ color: grey[500] }}/>, path:"/"},
  { text:"Manage Team",icon:<Diversity3Icon  fontSize="medium"
   sx={{color:lime[500]}}/>, path:"/team"},
  { text:"Contacts Information",icon:<ConnectWithoutContactIcon fontSize="medium"
   sx={{color:pink[500] }}/>, path:"/contacts"},
  { text:"Invoices Balances",icon:< ReceiptIcon fontSize="medium"
   sx={{color:lightBlue[500] }}/>, path:"/invoices"},
]

const Array2=[
  {text:"Profile Form",icon:<AccountBoxIcon fontSize="medium"
   sx={{ color: lightGreen[500] }} />,path:"form"},
  {text:"Calendar",icon:<CalendarMonthIcon fontSize="medium"
   sx={{ color: purple[500] }} />,path:"/calendar"},
  {text:"FAQ",icon:<QuizIcon fontSize="medium"
   sx={{ color: indigo[500] }} />,path:"/faq"},
]


const Array3=[
  {text:"Bar Chart",icon:<BarChartIcon fontSize="medium" 
  sx={{ color: yellow[700] }}/>,path:"/bar"},
  {text:"Pie Chart",icon:<DonutLargeIcon  fontSize="medium"
   sx={{ color: orange[700] }} />,path:"/pie"},
  {text:"Line Chart",icon:<TimelineIcon fontSize="medium"
   sx={{ color: green[500] }} />,path:"/line"},
  {text:"Geography Chart",icon:<MapIcon  fontSize="medium"
   sx={{ color:red[700] }}/>,path:"/geography"},
]

// main
const SidBox = ({open,handleDrawerClose}) => {
  const navigate = useNavigate();

  const theme = useTheme();
 return (
   <Drawer variant="permanent" open={open}>
       
       
       {/* الجزءالعلوي من تصميم */}
       
       <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
           </IconButton>
         </DrawerHeader>
       
           {/* الصوره */}
         
         <Avatar 
         sx={{ 
          mx:'auto',
          width: open? 88 : 44,
          height:open? 88 : 44,
          my:1,
          border:"2px solid grey"
        }}
          alt="Remy Sharp" src="../../public/my.png" />  
         <Typography align='center' variant='body1'
         sx={{
           fontSize: open ? 17 : 0 ,
           transition:"0.23s",
           color:theme.palette.grey[400]
           }}>
            Ibrahim
        </Typography>     
         
        
        <Typography align='center' variant='body2' 
         sx={{
           fontSize: open ? 15 : 0,
           transition:"0.23s",
          color:theme.palette.info.main
 
         }}>
          Admin 
        </Typography>     
         
      
      <Divider />
      


    
       <List>
         {Array1.map((item) => (
           <ListItem
            key={item.path} 
            disablePadding 
            sx={{ display: 'block' }}
            onClick={() => {
               navigate(item.path)
            }}
            >
             {/* عشان يطلع رساله صعيره لما اسوي هفر */}
             <Tooltip  placement="right" title={open? null: item.text}>

             <ListItemButton
               sx={{
                 minHeight: 48,
                 justifyContent: open ? 'initial' : 'center',
                 px: 2.5,
                }}
              >
               <ListItemIcon
                 sx={{
                   minWidth: 0,
                   mr: open ? 1 : 'auto',
                   justifyContent: 'center',
                 }}
               >
               {item.icon}
               </ListItemIcon>               
               <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
             </ListItemButton>
             </Tooltip>           
           
           </ListItem>
         ))}
       </List>
    
    <Divider />
       
    
       <List>
         {Array2.map((item) => (
           <ListItem key={item.path} disablePadding sx={{ display: 'block' }}
           onClick={() => {
            navigate(item.path)
         }}
           >
             <Tooltip  placement="right" title={open? null: item.text}>
             <ListItemButton
               sx={{
                 minHeight: 48,
                 justifyContent: open ? 'initial' : 'center',
                 px: 2.5,
               }}
             >
               <ListItemIcon
                 sx={{
                   minWidth: 0,
                   mr: open ? 3 : 'auto',
                   justifyContent: 'center',
                 }}
               >
 
               {item.icon}
                </ListItemIcon>
               <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
             </ListItemButton>
          </Tooltip>
           </ListItem>
         ))}
       </List> 
      
    <Divider />
  

       <List>
         {Array3.map((item) => (
           <ListItem key={item.path} disablePadding sx={{ display: 'block' }}
           onClick={()=>{
            navigate(item.path)
         }}
           >
             <Tooltip  placement="right" title={open? null: item.text}>
             <ListItemButton
               sx={{
                 minHeight: 48,
                 justifyContent: open ? 'initial' : 'center',
                 px: 2.5,
               }}
             >
               <ListItemIcon
                 sx={{
                   minWidth: 0,
                   mr: open ? 3 : 'auto',
                   justifyContent: 'center',
                 }}
               >
 
               {item.icon}
                </ListItemIcon>
               <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
             </ListItemButton>
          </Tooltip>
           </ListItem>
         ))}
       </List> 
     
     </Drawer>
 
 
 )
}

export default SidBox
