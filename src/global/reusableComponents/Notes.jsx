import React from "react"
import {Grid, Card,CardContent, Typography} from "@material-ui/core";


const Notes = (props) => {
    return (
        <>
       <Grid container
       justifyContent = "center"
       >
           <Grid
           items 
           lg = {12}
           sm = {10}
           align = "center"
           >
           </Grid>

           <Card
           style = {{
               padding:"2% 2% 2% 2%",
               margin:"2% 2% 2% 2%",
               width:"100%",
               height:"20vh",
               display:"flex",
               alignItems:"center"
           }}
           >
               <CardContent>
                   <Typography> {props.id}</Typography>
                   <Typography> {props.content}</Typography>
                   <Typography>{props.name}</Typography>

               </CardContent>
           </Card>
           </Grid> 
        </>
    )

}

export default Notes;