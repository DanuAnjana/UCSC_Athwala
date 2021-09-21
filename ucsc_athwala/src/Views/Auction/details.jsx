import React ,{useEffect, useState} from 'react';
import './Donation.css';
import { makeStyles } from '@material-ui/core/styles';
import Note from '../../image/note.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useParams } from 'react-router-dom';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';
import './Donation.css';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      }, flex1: {
        flexGrow: 1,
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      title:{
        color:"#546e7a",
        marginTop:10,
        marginBottom:20,
        fontFamily:"Poppins, sans-serif",
        marginTop:'40px',
        marginBottom:'30px'
      },

      card:{
        backgroundColor:"white",
        border:"none",
        boxShadow:"none",
        width:"550px",
      },

      labelname: {
          marginLeft:40,
          marginBottom:10,
          color:"000000",
          fontFamily:"Poppins, sans-serif",
          width:"150px"
      },

      labelvalue:{
        marginLeft:100,
        marginBottom:10,
        color:"000000",
        fontFamily:"Poppins, sans-serif",
        width:"200px"
      },

      contactbtn:{
          textTransform:"none",
          fontFamily:"Poppins, sans-serif",
      }
  
  }));

export function Description(){
    
    // console.log(auction_id)
  const history = useHistory();
  const classes = useStyles();
  const [mapset, SetMap] = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);
  const { auction_id } = useParams();
  const fetchData = () => {
    const userData=JSON.parse(localStorage.getItem("userData"));
    // const auction_id = userData.id;
    

    axios.get("http://localhost:5000/api/auction/details", {
        params: {id:auction_id},
    }).then((response) => {
        console.log(response.data);
        SetMap(response.data);
        
    })
  };



  function FormRow (props){
    const userData=JSON.parse(localStorage.getItem("userData"));
    // var id = props.id;

     var link;
    // if(props.type == 'note'){
    //   link = "/std/viewNoteCause_details";
    // }
    // else if (props.type == 'cloth'){
    //   link = "/std/viewClothCause_details";
    // }
    // else if (props.type == 'device'){
    //   link = "/std/viewDeviceCause_details";
    // }
    // else if (props.type == 'money'){
    //   link = "/std/viewMoneyCause_details";
    // }
    // else if (props.type == 'other'){
    //   link = "/std/viewOtherCause_details";
    // if(userData.userType === "STUDENT"){
    //   link = "/std/aucstop?id="+id;
    // }
    // if(userData.userType === "UNIONST"){
    //   link = "/std/aucstop?id="+id;
    // }

    return(
        <React.Fragment>
          <div class ="aucbox">
                        <Grid item xs={6}>
                        <Card className={classes.card}>
                                <CardContent >
                                    <Typography variant="h3" className={classes.title}>
                                        {/* {auction_id}  */}
                                    </Typography>
                                    <Typography variant="h3" className={classes.title} >
                                    {props.title}<span></span>
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.title}>
                                         
                                    {props.description}
                                        
                                    </Typography>
                                </CardContent>   
                            </Card>
                            
                        </Grid>
                    </div>
                        </React.Fragment>
    );
}
return(
<div className={classes.root}>
        
          
        {mapset.map(student => (  
                <FormRow title={student.title} id={student.auction_id} description={student.description}/> 
        ))}
          
        
    </div>
);
}


