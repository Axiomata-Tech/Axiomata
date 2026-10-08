"use client";

import React, { useState, useEffect, useMemo } from "react";

export function SystemDiagram() {
  const [activeNode, setActiveNode] = useState<string>("SOFTWARE");
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const nodes = useMemo(
    () => [
      { id: "SOFTWARE", label: "SOFTWARE", desc: "Web Apps & Internal Tools", x: 200, y: 70 },
      { id: "AUTOMATION", label: "AUTOMATION", desc: "Workflows & Pipelines", x: 500, y: 70 },
      { id: "SYSTEMS", label: "DIGITAL FOUNDATIONS", desc: "APIs, Cloud & Databases", x: 500, y: 270 },
      { id: "AI", label: "AI INTEGRATION", desc: "Intelligent Agents & RAG", x: 200, y: 270 },
    ],
    []
  );

  // Automatically cycle through nodes sequentially every 2.6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveNode((current) => {
        const currentIndex = nodes.findIndex((n) => n.id === current);
        const nextIndex = (currentIndex + 1) % nodes.length;
        return nodes[nextIndex].id;
      });
    }, 2600);

    return () => clearInterval(interval);
  }, [isPaused, nodes]);

  const activeNodeData = nodes.find((n) => n.id === activeNode);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full bg-[#111315] text-[#F6F2E9] border-2 border-[#111315] p-5 sm:p-6 select-none font-mono relative overflow-hidden rounded-[2px] shadow-sm"
    >
      {/* Top Diagram Bar */}
      <div className="flex items-center justify-between border-b border-[#3B4143] pb-3 text-xs mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00C7B7] animate-pulse" />
          <span className="font-bold tracking-widest text-[#00C7B7]">AXIOMATA // SYSTEM ARCHITECTURE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#77766F]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C7B7]" />
            STATUS: ACTIVE
          </span>
          <span>LATENCY: 12ms</span>
        </div>
      </div>

      {/* SVG Interactive Node Canvas */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] bg-[#171A1D] border border-[#3B4143] p-4 flex items-center justify-center">
        {/* Technical Background Grid Lines */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00C7B7 1px, transparent 1px),
              linear-gradient(to bottom, #00C7B7 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <svg viewBox="0 0 700 340" className="w-full h-full relative z-10 overflow-visible">
          {/* Subtle Grid Connecting Reference Lines */}
          <line x1="350" y1="30" x2="350" y2="310" stroke="#252A2E" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="50" y1="170" x2="650" y2="170" stroke="#252A2E" strokeWidth="1" strokeDasharray="3 3" />

          {/* Node Connections to Core */}
          {nodes.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <g key={`link-${node.id}`}>
                <line
                  x1="350"
                  y1="170"
                  x2={node.x}
                  y2={node.y}
                  stroke={isActive ? "#00C7B7" : "#3B4143"}
                  strokeWidth={isActive ? "2.5" : "1"}
                  strokeDasharray={isActive ? "none" : "4 4"}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}

          {/* Active Data Packet Indicator travelling towards active node */}
          {activeNodeData && (
            <circle
              cx={(350 + activeNodeData.x) / 2}
              cy={(170 + activeNodeData.y) / 2}
              r="3.5"
              fill="#00C7B7"
              className="animate-pulse"
            />
          )}

          {/* Core Central Hub Node */}
          <g transform="translate(350, 170)">
            <circle r="36" fill="#111315" stroke="#00C7B7" strokeWidth="2" />
            <circle r="6" fill="#00C7B7" className="animate-pulse" />
            <text
              y="52"
              textAnchor="middle"
              fill="#F6F2E9"
              fontSize="10"
              fontWeight="bold"
              letterSpacing="0.1em"
            >
              CORE PLATFORM
            </text>
          </g>

          {/* Outer Capability Nodes */}
          {nodes.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <g
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className="cursor-pointer group transition-all duration-300"
                transform={`translate(${node.x}, ${node.y})`}
              >
                <rect
                  x="-110"
                  y="-26"
                  width="220"
                  height="52"
                  fill={isActive ? "#111315" : "#1A1D20"}
                  stroke={isActive ? "#00C7B7" : "#3B4143"}
                  strokeWidth={isActive ? "2" : "1"}
                  rx="3"
                  className="transition-all duration-300"
                />
                <circle cx="-90" cy="0" r="4" fill={isActive ? "#00C7B7" : "#77766F"} />
                {isActive && (
                  <circle
                    cx="-90"
                    cy="0"
                    r="8"
                    fill="none"
                    stroke="#00C7B7"
                    strokeWidth="1.5"
                    className="opacity-60"
                  />
                )}
                <text
                  x="-75"
                  y="-4"
                  fill={isActive ? "#00C7B7" : "#F6F2E9"}
                  fontSize="11"
                  fontWeight="bold"
                  letterSpacing="0.08em"
                  className="transition-colors duration-300"
                >
                  {node.label}
                </text>
                <text x="-75" y="14" fill={isActive ? "#A7A39A" : "#77766F"} fontSize="8">
                  {node.desc}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Selected Node Status Footer */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] text-[#77766F] border-t border-[#3B4143] pt-2">
          <span>
            ACTIVE MODULE: <span className="text-[#00C7B7] font-bold">{activeNode}</span>
          </span>
          <span className="hidden sm:inline text-[#A7A39A]">
            {isPaused ? "PAUSED // CLICK TO SELECT" : "AUTO-ROTATING // HOVER TO PAUSE"}
          </span>
        </div>
      </div>
    </div>
  );
}
