import { motion, type PanInfo } from "framer-motion";
import type React from "react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Layers,
  PenTool,
  Send,
  Sparkles,
  Plus,
} from "lucide-react";

interface WorkflowNode {
  id: string;
  type: "trigger" | "action" | "condition";
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  position: { x: number; y: number };
}

interface WorkflowConnection { from: string; to: string; }

const NODE_WIDTH = 200;
const NODE_HEIGHT = 100;

const nodeTemplates: Omit<WorkflowNode, "id" | "position">[] = [
  { type: "trigger", title: "Capturar Ideia", description: "Link, print, notícia ou frase", icon: Lightbulb },
  { type: "action", title: "Processar Contexto", description: "Analisa tom, nicho e formato", icon: Sparkles },
  { type: "condition", title: "Escolher Formato", description: "Post, carrossel ou thread", icon: Layers },
  { type: "action", title: "Gerar Conteúdo", description: "Texto pronto no seu tom", icon: PenTool },
  { type: "action", title: "Publicar", description: "Revise, ajuste e publique", icon: Send },
];

const initialNodes: WorkflowNode[] = [
  { id: "node-1", ...nodeTemplates[0], position: { x: 50, y: 100 } },
  { id: "node-2", ...nodeTemplates[1], position: { x: 300, y: 100 } },
  { id: "node-3", ...nodeTemplates[2], position: { x: 550, y: 100 } },
];

const initialConnections: WorkflowConnection[] = [
  { from: "node-1", to: "node-2" },
  { from: "node-2", to: "node-3" },
];

function WorkflowConnectionLine({ from, to, nodes }: { from: string; to: string; nodes: WorkflowNode[] }) {
  const fromNode = nodes.find((n) => n.id === from);
  const toNode = nodes.find((n) => n.id === to);
  if (!fromNode || !toNode) return null;
  const startX = fromNode.position.x + NODE_WIDTH;
  const startY = fromNode.position.y + NODE_HEIGHT / 2;
  const endX = toNode.position.x;
  const endY = toNode.position.y + NODE_HEIGHT / 2;
  const cp1X = startX + (endX - startX) * 0.5;
  const cp2X = endX - (endX - startX) * 0.5;
  return <path d={`M${startX},${startY} C${cp1X},${startY} ${cp2X},${endY} ${endX},${endY}`} fill="none" stroke="hsl(222 80% 52% / 0.2)" strokeWidth="2" strokeDasharray="6 4" />;
}

export function N8nWorkflowBlock() {
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialNodes);
  const [connections, setConnections] = useState<WorkflowConnection[]>(initialConnections);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragStartPosition = useRef<{ x: number; y: number } | null>(null);
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [contentSize, setContentSize] = useState(() => ({
    width: Math.max(...initialNodes.map(n => n.position.x + NODE_WIDTH)) + 50,
    height: Math.max(...initialNodes.map(n => n.position.y + NODE_HEIGHT)) + 50,
  }));

  const handleDragStart = (nodeId: string) => { setDraggingNodeId(nodeId); const n = nodes.find(n => n.id === nodeId); if (n) dragStartPosition.current = { ...n.position }; };
  const handleDrag = (nodeId: string, { offset }: PanInfo) => {
    if (draggingNodeId !== nodeId || !dragStartPosition.current) return;
    const newX = Math.max(0, dragStartPosition.current.x + offset.x);
    const newY = Math.max(0, dragStartPosition.current.y + offset.y);
    flushSync(() => { setNodes(prev => prev.map(n => n.id === nodeId ? { ...n, position: { x: newX, y: newY } } : n)); });
    setContentSize(prev => ({ width: Math.max(prev.width, newX + NODE_WIDTH + 50), height: Math.max(prev.height, newY + NODE_HEIGHT + 50) }));
  };
  const handleDragEnd = () => { setDraggingNodeId(null); dragStartPosition.current = null; };
  const addNode = () => {
    const template = nodeTemplates[Math.floor(Math.random() * nodeTemplates.length)];
    const lastNode = nodes[nodes.length - 1];
    const newPosition = lastNode ? { x: lastNode.position.x + 250, y: lastNode.position.y } : { x: 50, y: 100 };
    const newNode: WorkflowNode = { id: `node-${Date.now()}`, ...template, position: newPosition };
    flushSync(() => { setNodes(prev => [...prev, newNode]); if (lastNode) setConnections(prev => [...prev, { from: lastNode.id, to: newNode.id }]); });
    setContentSize(prev => ({ width: Math.max(prev.width, newPosition.x + NODE_WIDTH + 50), height: Math.max(prev.height, newPosition.y + NODE_HEIGHT + 50) }));
    canvasRef.current?.scrollTo({ left: newPosition.x + NODE_WIDTH - (canvasRef.current?.clientWidth || 0) + 100, behavior: "smooth" });
  };

  return (
    <div className="surface-elevated overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/15 text-[11px]">Ativo</Badge>
          <span className="text-sm font-medium text-foreground">Fluxo de Criação</span>
        </div>
        <Button size="sm" variant="outline" onClick={addNode} className="gap-1.5 text-xs h-8">
          <Plus className="w-3.5 h-3.5" /> Adicionar
        </Button>
      </div>

      <div ref={canvasRef} className="relative overflow-auto bg-secondary/50" style={{ height: 280 }}>
        <svg className="absolute inset-0 pointer-events-none" style={{ width: contentSize.width, height: contentSize.height }}>
          {connections.map(c => <WorkflowConnectionLine key={`${c.from}-${c.to}`} from={c.from} to={c.to} nodes={nodes} />)}
        </svg>
        <div style={{ width: contentSize.width, height: contentSize.height, position: "relative" }}>
          {nodes.map(node => {
            const Icon = node.icon;
            return (
              <motion.div key={node.id} drag dragMomentum={false}
                onDragStart={() => handleDragStart(node.id)} onDrag={(_, info) => handleDrag(node.id, info)} onDragEnd={handleDragEnd}
                style={{ x: node.position.x, y: node.position.y, width: NODE_WIDTH, transformOrigin: "0 0" }}
                className="absolute cursor-grab" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }} whileHover={{ scale: 1.02 }} whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
              >
                <div className="bg-card border border-border rounded-xl p-4 h-full soft-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-primary" />
                    <Badge variant="outline" className="text-[10px] border-primary/15 text-primary">
                      {node.type === "trigger" ? "entrada" : node.type === "condition" ? "decisão" : "ação"}
                    </Badge>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">{node.title}</h4>
                  <p className="text-[11px] text-muted-foreground mt-1">{node.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-2.5 border-t border-border text-[11px] text-muted-foreground">
        <span>{nodes.length} {nodes.length === 1 ? "Etapa" : "Etapas"}</span>
        <span>{connections.length} {connections.length === 1 ? "Conexão" : "Conexões"}</span>
        <span>Arraste para reposicionar</span>
      </div>
    </div>
  );
}
