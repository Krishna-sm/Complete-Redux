import { useDispatch, useSelector } from "react-redux"
import { obj } from "./redux/Store"

const Asyncr = ()=>{

    const value = useSelector((s)=>s.Alldata.data)
        const dispatch = useDispatch()

    const OnSubmitHandler = ()=>{
            dispatch((dispatch)=>{
                setTimeout(()=>{
                    dispatch({type:obj.ADD_data,payload:'harish'+Math.random()*88888})
                },2000);
            })
    }   

    return<>
                <button onClick={OnSubmitHandler}>add Data</button>
                <p>value:{value}</p>
    </>
}

export default Asyncr