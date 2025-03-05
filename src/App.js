
import { Footer } from "./Mycompnet/Footer";
import Header from "./Mycompnet/Header";
import { Todo } from "./Mycompnet/Todo";


function App() {
  let todo =[{
    No:1,
    title:"go to market",
    dec:"you need to go to market  to get this job done"
  },
  {
    No:2,
    title:"go to mall",
    dec:"you need to go to market  to get this job done"
  },
  {
    No:3,
    title:"go to ghat",
    dec:"you need to go to market  to get this job done"
  },
]
  return (
    <>
    <Header title = "My todo list" searchbar={true}/>
    <Todo todos ={todo}/>
  
    <Footer/>


  
    </>
 
   
  );
}

export default App;
