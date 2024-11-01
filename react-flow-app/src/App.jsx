import AboutUs from "./AboutUs";
import Blog from "./Blog";
import BriterText from "./BriterText";
import ContactUs from "./ContactUs";
import CourseGoal from "./CourseGoal";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";
import Greeting from "./Greeting";
import MovieGrid from "./MovieGrid";


function App()
{
  return(
    <>
    {/* <h1>Welcome to react class</h1>
   {/* <ContactUs />
   <AboutUs />
   <Greeting /> 
   
   <Example2/>
   <Example1/>
   <Example3/>
   <Example4/>
   <Example5/> */}
   {/* <CourseGoal title='learn react' 
   description='in depth'/>
   <CourseGoal title='About ratan sir' 
   description='ratan sir is nice'/>
    */}
    {/* <Blog title="jaya" body="jayaaaaaaaaaaaaa"/> */}

    {/* <BriterText color='red'/>
    <BriterText color='green'/>
    <BriterText color='blue'/> */}

<MovieGrid movies={[
   {Title:"ganga",description:"horrer",releaseDate:2007,rating:7},
   {Title:"ganga",description:"horrer",releaseDate:2007,rating:7},
  ]}/>
    </>
  )
}export default App;