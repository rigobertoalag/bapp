import { Box, Paper } from "@mui/material";
import React from "react";

const Content = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "85%",
          height: 128,
        },
        alignContent:'center',
        justifyContent: 'center'
      }}
    >
      <Paper elevation={6}>
        <div style={{ display:'flex', alignItems:'center', height:'100%', width:'100%' }}>
          <Paper elevation={4} style={{ backgroundColor: "gray", height: 90, width: 90, margin:10}}>
              <img src="https://m.media-amazon.com/images/I/819oEzz9axL._AC_SL1500_.jpg" alt="disco" style={{ height: '100%', width:'100%',borderRadius:3 }} />
          </Paper>
          <p>Discografía</p>
        </div>
      </Paper>
      <Paper elevation={6}>
        <div style={{ display:'flex', alignItems:'center', height:'100%', width:'100%' }}>
          <Paper elevation={4} style={{ backgroundColor: "gray", height: 90, width: 90, margin:10}}>
              <img src="https://i.pinimg.com/originals/a4/92/53/a49253af6bcfd57f9bd71fed3daea364.jpg" alt="band" style={{ height: '100%', width:'100%',borderRadius:3 }} />
          </Paper>
          <p>La banda</p>
        </div>
      </Paper>
      <Paper elevation={6}>
        <div style={{ display:'flex', alignItems:'center', height:'100%', width:'100%' }}>
          <Paper elevation={4} style={{ backgroundColor: "gray", height: 90, width: 90, margin:10}}>
              <img src="https://pleasuresofpasttimes.com/wp-content/uploads/2021/01/IMG_1214-scaled.jpg" alt="1" style={{ height: '100%', width:'100%',borderRadius:3 }} />
          </Paper>
          <p>Un día en la vida</p>
        </div>
      </Paper>
      <Paper elevation={6}>
        <div style={{ display:'flex', alignItems:'center', height:'100%', width:'100%' }}>
          <Paper elevation={4} style={{ backgroundColor: "gray", height: 90, width: 90, margin:10}}>
              <img src="https://i.ytimg.com/vi/b-VAxGJdJeQ/maxresdefault.jpg" alt="1" style={{ height: '100%', width:'100%',borderRadius:3 }} />
          </Paper>
          <p>Videos / Peliculas</p>
        </div>
      </Paper>
    </Box>
  );
};

export default Content;
