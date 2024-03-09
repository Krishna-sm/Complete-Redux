import { useDispatch, useSelector } from "react-redux"
import { obj } from "./redux/Store";

const BgColor = ()=>{

    const value = useSelector((s)=>s.color.color)

    const dispatch = useDispatch()

    console.log(value);

    return <>
                <div className="div" style={{backgroundColor:value}}></div>
                <input  type="color" onChange={(e)=> dispatch({type:obj.COLOR_CHANGE,payload:e.target.value}) } />
    </>
}


export default BgColor