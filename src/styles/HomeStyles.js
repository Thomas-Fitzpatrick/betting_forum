import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  
<<<<<<< HEAD
  HotPostHeader: {
=======
  h1: {
>>>>>>> 048884b... Added navigation for event links
    fontSize:40,
    color:"red"
  },  

  nav_post_container: { 
    display:"flex",
    flexDirection:"row",
    alignItems:"flex-start",
  },

  sidenav: {
     backgroundColor:"lightgray", 
     border:"1px solid black", 
     marginTop:30,
     marginRight:20
  }, 

  HotPosts: {
    
  }

}));

export default useStyles;
