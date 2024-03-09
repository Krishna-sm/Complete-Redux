export function BgColor(state={color:`#fff`},actions){
    console.log(actions);
    console.log(actions);
        switch (actions.type) {
            case obj.COLOR_CHANGE:
                return { color: actions.payload }   
                break;
        
            default:
                return state
        }
}
