import React from 'react';
import ReactFlowComponent from './components/ReactFlowComponent'
import { LeftBar } from './components/leftBar/LeftBar';
import { ReactFlowProvider, MiniMap, Controls } from 'reactflow';



export default function App() {

  return (
    <ReactFlowProvider>
      <div style={styles.editorContainer}>
          <LeftBar/>
          <ReactFlowComponent/>
          <MiniMap/>
          <Controls/>
      </div>
    </ReactFlowProvider>
  );
}

const styles = {
  editorContainer:{
    display:'flex'
  }
}