# Chatbot Flow Builder

A visual chatbot flow editor built using **React**, **React Flow**, and **Tailwind CSS**.

## Live Link 

[Chatbot Flow Builder Live](https://chat-bot-flow-builder-orpin.vercel.app/)

## 🔹 Features

- **Text Node**: Create and connect simple text message nodes.
- **Drag & Drop**: Add nodes from the side panel onto the canvas.
- **Connections**:
  - One outgoing connection per node (source handle).
  - Multiple incoming connections allowed (target handle).
- **Settings Panel**: Edit the message of the selected node.
- **Save Button**: Validates the chatbot flow.
- **Reset Flow**: Clears the canvas.
- **Toast Notifications**: Provides user feedback for actions.

## ✅ Flow Validation Rules

- Must contain at least two nodes.
- Only one node can be left without an outgoing edge.

## 🛠️ Tech Stack

- Vite + React
- React Flow
- Tailwind CSS
- React Hot Toast

## Screenshots
![1](https://github.com/user-attachments/assets/c7325080-3b8f-411f-bf62-7d958e609e4d)

![2](https://github.com/user-attachments/assets/d61b47a9-15ae-4af2-830e-b89bac6cf981)

![3](https://github.com/user-attachments/assets/fcc9148f-7474-4221-8dc6-aed11a761a13)


## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/PraveenNagaraj77/ChatBot-Flow-Builder.git
cd ChatBot-Flow-Builder
npm install
npm run dev
