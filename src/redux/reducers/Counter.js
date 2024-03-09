
export function Counter(state={count:0},actions){
    console.log(actions);
        switch (actions.type) {
            case obj.ADD:
                return { count: state.count + 1 }   
                break;
                case obj.SUB:
                return { count: state.count - 1 }   
                break;
                case obj.ADDBYNUM:
                return { count: state.count +actions.payload }   
                break;
        
            default:
                return state
        }
}