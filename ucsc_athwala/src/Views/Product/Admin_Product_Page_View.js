import React, {useEffect,useState} from 'react'
import {Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {ProductButton,ProductPostButton,MyProductButton,MyProductBuyButton} from './Product_button';
import Grid from '@material-ui/core/Grid';
import SearchBar from './Product_search_bar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextTruncate from 'react-text-truncate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EventLaptopHP from '../../image/laptopHP.jpg';
import Cloth from '../../image/cloth.jpg';
import Device from '../../image/device.jpg';
import Money from '../../image/money.jpg';
import Note from '../../image/note.jpg';
import Other from '../../image/other.jpg';
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';


const useStyles = makeStyles((theme) =>({
    root: {
        marginTop:10,
        flexGrow: 1,
    },
    title:{
        color:"#546e7a",
        marginLeft:10,
        //marginTop:5,
        //marginBottom:10,
        //marginLeft:70,
        
    },
    title1:{
        color:"#546e7a",
        marginTop:20,
        marginBottom:20,
        flexGrow: 1,
        
        
    },
    filterbar: {
        //float:"right",
        width:800,
        //display:'flex',
        //justifyContent:'center',
        bottom:38,
        left:170,
        position:'relative',
        //alignItems:'center',
     },
     donateButton:{
        color: "#FFFFFF",
        backgroundColor: "transparent",
        textTransform: "none"
      },
      cardFooter: {
        backgroundColor: "#757de8",
      },
      cardtext: {
        color: "#e91e63",
        fontWeight:"bold",
        marginBottom:0,
      },
      productbtn: {
        // color: "#f57c00",
        fontWeight:"bold",
        border: "2px solid #757de8",
        float:"right",
        
      },
      card: {

        borderRadius: 0,
        //backgroundColor: theme.palette.primary.light,
        //color: theme.palette.primary.contrastText,
        boxShadow: 'rgba(0, 0, 255, 0.1) 0px 1px 6px, rgba(0, 0, 255, 0.1) 0px 1px 4px',
        borderBottom: "2px solid #757de8",
        
        
       },
       nonUnderline:{
        "&:hover":{textDecoration:"none"},
       },
   
   
  }));


//   const students = [  
    
//     {  
//         'id': 1,
//         'type' : 'Electric devices' , 
//         'title': 'HP Laptop',   
//         'description': 'HP Probook 450 G7' , 
//         'price': 'Rs. 60 000.00',  
//         'image' :EventLaptopHP,
//     },  
//     {  
//       'id': 3, 
//       'type' : 'Electric devices' ,   
//       'title': 'Mobile phone',   
//       'description': 'I am a first year student. i need mobile phone' ,
//       'price': 'Rs. 60 000.00', 
//       'image' :Device,   
//     }, 
//     {  
//       'id': 4, 
//       'type' : 'money' ,   
//       'title': 'Course fees',   
//       'description': 'help with money for course fees' , 
//       'price': 'Rs. 60 000.00', 
//       'image' :Money, 
//     }, 
//     {  
//       'id': 5,
//       'type' : 'Lecture note' ,    
//       'title': 'DSA Lecture note',   
//       'description': 'im 2nd year student.I need DSA 2 lecture note' ,
//       'price': 'Rs. 60 000.00',   
//       'image' :Note,
//     },
//     {  
//       'id': 6,  
//       'type' : 'other' ,  
//       'title': 'help for my brothers ',   
//       'description': 'I am a second year student. My brother got accident last month.' ,
//       'price': 'Rs. 60 000.00',  
//       'image' :Other,  
//     },
//     {  
//       'id': 7,  
//       'type' : 'note' ,  
//       'title': 'Database Lecture note',   
//       'description': 'im 2nd year student.I need database lecture note' ,  
//       'price': 'Rs. 60 000.00', 
//       'image' :Note, 
//     },
//     {  
//       'id': 2, 
//       'type' : 'cloth' ,   
//       'title': 'Office Trousers',   
//       'description': 'i am 2nd year student.I need Office Trousers' , 
//       'price': 'Rs. 60 000.00', 
//       'image' :Cloth,
//     }, 
// ]; 

export default function ProductViews(){

    const history = useHistory();
    const classes = useStyles();

    const userData=JSON.parse(localStorage.getItem("userData"));
    console.log(userData);

    
  const [mapset, SetMap] = useState([]);
  const [filter, setFilter] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () => {
        
    const response = await fetch(`http://localhost:5000/api/products/viewAdminAllProducts`, {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    SetMap(result);
  };

  const tabButton =() =>{
    if(userData.userType === "STUDENT" ||userData.userType === "UNIONST"  ){
      return(
        <>
        <ProductButton />
        <ProductPostButton />
        <MyProductButton />
        </>
      );
    }
    if(userData.userType === "ALUMNI"){
      return(
        <>
        {/* <MyDonationButton /> */}
        <ProductButton />
        <MyProductBuyButton />
        </>
      );
    }

  }


    function FormRow (props){
        var link;
        var id = props.id;
        var imglink = "http://localhost:5000/product/"+id+".jpg";

        if(props.type == 'device'){
          if(userData.userType === "STUDENT"){
            link = "/std/ViewProductDetails?id="+id;
          }
          else if(userData.userType === "UNIONST" ){
            link = "/ustd/ViewProductDetails?id="+id;
          }
          else if(userData.userType === "ALUMNI" ){
            link = "/pst/ViewProductDetails?id="+id;
          }
          else if(userData.userType === "ADMIN" ){
            link = "/admin/ViewAdminProductDetails?id="+id;
          }
          //imglink = EventLaptopHP;
        }
        else if (props.type == 'note'){
          if(userData.userType === "STUDENT"){
            link = "/std/ViewProductDetailsNote?id="+id;
          }
          else if(userData.userType === "UNIONST" ){
            link = "/ustd/ViewProductDetailsNote?id="+id;
          }
          else if(userData.userType === "ALUMNI" ){
            link = "/pst/ViewProductDetailsNote?id="+id;
          }
          else if(userData.userType === "ADMIN" ){
            link = "/admin/ViewAdminProductDetailsNote?id="+id;
          }
          //imglink = Note;
        }
        else if (props.type == 'other'){
          if(userData.userType === "STUDENT"){
            link = "/std/ViewProductDetailsOther?id="+id;
          }
          else if(userData.userType === "UNIONST" ){
            link = "/ustd/ViewProductDetailsOther?id="+id;
          }
          else if(userData.userType === "ALUMNI" ){
            link = "/pst/ViewProductDetailsOther?id="+id;
          }
          else if(userData.userType === "ADMIN" ){
            link = "/admin/ViewAdminProductDetailsOther?id="+id;
          }
          //imglink = Other;
        }
        return (
          <React.Fragment>
            <Grid item xs={12} sm={6} md={3}>
            <Link className={classes.nonUnderline} to={link}>
            <Card className={classes.card}>
    
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  src= {imglink}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                  </Typography>
                 
                  <TextTruncate
                      line={1}
                      element="span"
                      truncateText="…"
                      text={props.description}
                  />
                    
                    <Typography gutterBottom variant="h6" component="h2" className={classes.cardtext}>
                    Rs: {props.price}.00
                    
                  </Typography>
                  
                </CardContent>
              </CardActionArea>

           
{/*     
              <CardActions >
                <Link to={link}>
                <Grid item s ={4}>
                    <Button size="medium" variant="outlined" color="primary"  
                className={classes.productbtn}
                // startIcon={<FavoriteBorderIcon />}
                >
                  SEE MORE
                </Button>
                    </Grid>
             
               </Link> 
    
              </CardActions>  */}
    
          </Card>
          </Link> 
            </Grid>
          </React.Fragment>
        );
      }
    
    return(
        <div>
            
            <div className={classes.title1}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h5" className={classes.title}>All Products</Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <SearchBar />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <div></div>
                    </Grid>
                </Grid>       
                
            </div>
               
           
            <div>
                <div style={{float:"left"}}>
                    <Grid container spacing={4}>
                        {tabButton()}
                        
                    </Grid>  
                </div>

                
            </div>
            <div className={classes.root}>
          <Grid container spacing={6}>
            {mapset.map(product => (  
                      <FormRow title={product.title} description={product.description} price={product.price} id={product.product_id} type={product.product_type}/> 
              ))}
                
          </Grid>
        </div>
    </div>
  );
}


    