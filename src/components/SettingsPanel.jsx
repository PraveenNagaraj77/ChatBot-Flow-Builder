
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react'; 

export default function SettingsPanel({ selectedNode, setSelectedNode }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (selectedNode) {
      setText(selectedNode.data.label || '');
    }
  }, [selectedNode]);

  const handleChange = (e) => {
    setText(e.target.value);
    setSelectedNode((prev) => ({
      ...prev,
      data: { ...prev.data, label: e.target.value },
    }));
  };

  const handleBack = () => setSelectedNode(null);

  return (
    <div className="space-y-4">

      <div className="flex items-center gap-2">
        <button onClick={handleBack} className="text-gray-600 hover:text-gray-800">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-lg font-semibold">Message</h2>
      </div>


      <label className="block">
        <span className="text-sm text-gray-700">Text</span>
        <textarea
          rows={4}
          value={text}
          onChange={handleChange}
          placeholder="Type your message..."
          className="w-full mt-1 p-2 border rounded text-sm resize-none"
        />
      </label>
    </div>
  );
}
