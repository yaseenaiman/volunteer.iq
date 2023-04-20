
 
import { getUsers } from "../api/api";
import { useState } from "react";
import CardF from "./cardF";
export default function NewCard( )
  
  { const [tasks, setTasks] = useState(getUsers());
    
    
    return (
      

<>
<div className="row">

  {
tasks.map((item, index) => (
  <CardF key={item.Id} name={item.Name} articles={item.Articles} imgi={item.Imgi} />
))

  }
</div>
</>


);
    
    }