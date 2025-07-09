
import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
  ReactFlowProvider,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import TextNode from './nodes/TextNode';

const nodeTypes = { textNode: TextNode };

let id = 0;
const getId = () => `node_${id++}`;

function FlowCanvasInner({ setSelectedNode, setAllNodes, setAllEdges }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);


  useEffect(() => {
    setAllNodes(nodes);
    setAllEdges(edges);
  }, [nodes, edges, setAllNodes, setAllEdges]);


  const onConnect = useCallback(
    (params) => {
      const alreadyConnected = edges.some((e) => e.source === params.source);
      if (!alreadyConnected) {
        setEdges((eds) =>
          addEdge(
            {
              ...params,
              markerEnd: {
                type: MarkerType.ArrowClosed,
              },
              style: { strokeWidth: 2 },
            },
            eds
          )
        );
      }
    },
    [edges, setEdges]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData('application/reactflow');
      if (!type) return;

      const bounds = event.target.getBoundingClientRect();
      const position = {
        x: event.clientX - bounds.left - 75,
        y: event.clientY - bounds.top,
      };

      const newNode = {
        id: getId(),
        type,
        position,
        data: {
          label: '',
          onChange: () => {},
          onDelete: onDeleteNode,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onNodeClick = useCallback(
    (_, node) => {
      setSelectedNode(node);
    },
    [setSelectedNode]
  );

  const onDeleteNode = (nodeId) => {
  setNodes((nds) => nds.filter((n) => n.id !== nodeId));
  setEdges((eds) => eds.filter((e) => e.source !== nodeId && e.target !== nodeId));
};


  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onNodeClick={onNodeClick}
      fitView
    >
      <MiniMap />
      <Controls />
      <Background gap={16} color="#aaa" />
    </ReactFlow>
  );
}

export default function FlowCanvas({ setSelectedNode, setAllNodes, setAllEdges }) {
  return (
    <ReactFlowProvider>
      <FlowCanvasInner
        setSelectedNode={setSelectedNode}
        setAllNodes={setAllNodes}
        setAllEdges={setAllEdges}
      />
    </ReactFlowProvider>
  );
}
