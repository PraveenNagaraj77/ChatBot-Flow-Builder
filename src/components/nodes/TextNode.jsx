
import React from 'react';
import { Handle, Position } from 'reactflow';
import { MessageCircle } from 'lucide-react';

export default function TextNode({ id, data }) {
  return (
    <div className="rounded-md shadow-md border border-gray-300 text-sm bg-white min-w-[180px] relative">

      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 bg-gray-500"
      />


      <div className="flex justify-between items-center bg-teal-100 px-3 py-1 rounded-t-md border-b text-xs font-semibold">
        <div className="flex items-center gap-1 text-teal-800">
          <MessageCircle size={14} />
          Send Message
        </div>

        <button
          onClick={() => data.onDelete(id)}
          className="text-red-600 text-xs hover:underline"
        >
          ❌
        </button>
      </div>


      <div className="p-3 min-h-[40px] text-gray-800">
        {data.label || 'Text Message'}
      </div>


      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 bg-gray-500"
      />
    </div>
  );
}
