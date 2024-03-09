import { useDispatch, useSelector } from "react-redux"
import { obj } from "./redux/Store";
import BgColor from "./BgColor";
import Asyncr from "./Asyncr";

const App = ()=>{

  const value = useSelector((store)=>store)
  const dispatch = useDispatch()
  console.log(value);
  return <>
        <button onClick={()=>dispatch({type:obj.ADD})}>+</button>
        <button onClick={()=>dispatch({type:obj.ADDBYNUM,payload:5})}>+5</button>
        <h1>{value.count.count}</h1>
        <button onClick={()=>dispatch({type:obj.SUB})}>-</button>

        <BgColor/>
        <Asyncr/>
  </>
}


export default App