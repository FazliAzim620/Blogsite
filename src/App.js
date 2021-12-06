import "./App.css";
import Header from "./components/Header/Header";
import { Container, createTheme, ThemeProvider, Grid,makeStyles } from "@material-ui/core";
import FeaturePost from "./components/FeaturePost/FeaturePost";
import { featuredPosts } from "./components/Data/Data";
import PostCard from "./components/FeaturePost/PostCard";
import MainSection from "./components/MainSection/MainSection";
import SideBar from "./components/Sidebar/SideBar";
import {sidebar} from './components/Data/Data';
import Footer from './components/Footer/Footer';


const useStyles = makeStyles((theme)=>({
  mainGrid:{
    marginTop:theme.spacing(3),
  },


}));
function App() {
  const classes = useStyles();
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  return (

    <ThemeProvider theme={darkTheme}>
      <Container >
        <Header />
        <FeaturePost />
        <br />
        <Grid container spacing={4} >
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid  container  className={classes.mainGrid}>
        <MainSection title='the main content Title pass by props'/>
        <SideBar title={sidebar.title}
        key={sidebar.title}
          discription={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
     
        />

        </Grid>
    
      </Container>
      <Footer 
        title="Footer"
        description="Hi this is created by fazli!"
      />
    </ThemeProvider>
  );
}

export default App;
