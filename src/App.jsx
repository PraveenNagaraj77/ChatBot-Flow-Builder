// src/App.jsx
import React, { useState } from 'react';
import NodePanel from './components/NodePanel';
import SettingsPanel from './components/SettingsPanel';
import FlowCanvas from './components/FlowCanvas';
import { Toaster, toast } from 'react-hot-toast'; // ✅ Import toast

export default function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [allNodes, setAllNodes] = useState([]);
  const [allEdges, setAllEdges] = useState([]);

  // 🔁 Clear all nodes and edges
  const handleResetFlow = () => {
    setAllNodes([]);
    setAllEdges([]);
    setSelectedNode(null);
    toast.success('Flow has been reset.');
  };

  // 💾 Save flow with validation
  const handleSave = () => {
    if (allNodes.length <= 1) {
      toast.error('Flow must have more than 1 node to validate.');
      return;
    }

    const sourceNodeIds = new Set(allEdges.map((edge) => edge.source));
    const nodesWithNoOutgoing = allNodes.filter(
      (node) => !sourceNodeIds.has(node.id)
    );

    if (nodesWithNoOutgoing.length > 1) {
      toast.error(' More than one node has no outgoing connection.');
    } else {
      toast.success(' Flow is valid and saved successfully!');
      console.log('Final Flow:', { nodes: allNodes, edges: allEdges });
    }
  };

  return (
    <div className="h-screen flex flex-col">

      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />


      <div className="p-4 border-b flex justify-between items-center bg-white">
        <h1 className="text-xl font-semibold">Chatbot Flow Builder</h1>
        <div className="space-x-3">
          <button
            onClick={handleResetFlow}
            className="text-sm px-4 py-1.5 rounded border text-gray-700 hover:bg-gray-100"
          >
             Reset Flow
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-1.5 text-sm rounded hover:bg-blue-700"
          >
             Save Changes
          </button>
        </div>
      </div>


      <div className="flex flex-1">

        {!selectedNode && (
          <div className="w-1/5 bg-gray-100 p-4 border-r">
            <NodePanel />
          </div>
        )}


        <div className="flex-1">
          <FlowCanvas
            setSelectedNode={setSelectedNode}
            setAllNodes={setAllNodes}
            setAllEdges={setAllEdges}
          />
        </div>


        {selectedNode && (
          <div className="w-1/4 bg-gray-50 p-4 border-l">
            <SettingsPanel
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
            />
          </div>
        )}
      </div>
    </div>
  );
}
