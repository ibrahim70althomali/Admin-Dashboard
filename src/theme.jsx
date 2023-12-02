import { blueGrey, green, grey } from "@mui/material/colors";
import amber from "@mui/material/colors/amber";

 export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: blueGrey,
            divider: grey[100],

            background: {
              default: grey[100],
             
            },
            
            
           
          }
        : {
            // palette values for dark mode
          
          }),
    },
  });
  