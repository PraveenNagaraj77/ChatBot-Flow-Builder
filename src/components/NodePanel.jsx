
import React from 'react';

const nodeTypes = [
  { type: 'textNode', label: 'Text Message' },
];

export default function NodePanel() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Nodes</h2>
      {nodeTypes.map((node) => (
        <div
          key={node.type}
          onDragStart={(event) => onDragStart(event, node.type)}
          draggable
          className="p-2 mb-2 border rounded bg-white shadow cursor-move text-sm"
        >
          {node.label}
        </div>
      ))}
    </div>
  );
}
