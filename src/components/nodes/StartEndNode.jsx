import { Handle, Position } from "reactflow"

export function StartEndNode({data}){
    const {label} = data

    return <>
        <div style={styles.nodeContainer}>
            {label}
        </div>
       {label==='Start'? <Handle type="source" position={Position.Bottom} id="a" />
        :<Handle type="target" position={Position.Top} id="b"  />}
    </> 
}

const styles = {
    nodeContainer:{
        display: 'grid',
        padding:8,
        position:'relative',
        width: 38,
        height: 21,
        placeItems:'center',
        borderStyle:'solid',
        borderWidth:2,
        borderRadius: 6,
        color:'white',
        backgroundColor:'rgb(97,209,136)',
        fontSize:'1rem'
    }
}