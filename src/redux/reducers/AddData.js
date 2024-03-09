

export function AddData(state={data:` `},actions){
    console.log(actions);
    console.log(actions);
        switch (actions.type) {
            case obj.ADD_data:
                return { data: actions.payload }   
                break;
        
            default:
                return state
        }
}