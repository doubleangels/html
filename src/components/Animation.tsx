import React, { useEffect, useRef, useCallback, useMemo } from 'react';

type Line = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  length: number;
  lengthSq: number; // Pre-calculate squared length
  width: number;
  v1: number;
  v2: number;
  half: boolean;
  hue: number;
  opacity: number; // Store opacity per line
  strokeStyle: string; // Pre-calculate style
};

type BgDot = {
  rad: number;
  x: number;
  y: number;
  hue: number;
  gradient: CanvasGradient | null;
};

type Config = {
  hue: number;
  shadow: boolean;
  width: number;
  length: number;
  emitNum: number;
  speed: number;
  opacity: number;
  maxLines: number;
};

const Animation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const linesRef = useRef<Line[]>([]);
  const frameRef = useRef<number>(0);
  const confRef = useRef<Config>({
    hue: 5,
    shadow: false,
    width: 1,
    length: 1,
    emitNum: 2,
    speed: 1,
    opacity: 0.6,
    maxLines: 300,
  });
  const canvasSize = useRef({ w: window.innerWidth, h: window.innerHeight });
  const bgDotsRef = useRef<BgDot[]>([]);
  
  // Memoize the distance squared function
  const distSq = useCallback((x1: number, y1: number, x2: number, y2: number): number => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return dx * dx + dy * dy;
  }, []);

  // Initialize canvas with the correct size
  const initCanvas = useCallback((canvas: HTMLCanvasElement) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    canvasSize.current = { w, h };
    
    // Update context if needed
    if (!ctxRef.current) {
      const ctx = canvas.getContext('2d', { alpha: false });
      if (ctx) {
        ctxRef.current = ctx;
      }
    }
  }, []);

  // Update background dots and pre-compute gradients
  const updateBgDots = useCallback(() => {
    const { w, h } = canvasSize.current;
    const rad = (w + h) / 2;
    const ctx = ctxRef.current;
    
    bgDotsRef.current = [
      { rad, x: w / 2, y: 0, hue: 0, gradient: null },
      { rad, x: 0, y: h, hue: -45, gradient: null },
      { rad, x: w, y: h, hue: -90, gradient: null },
    ];
    
    // Pre-compute gradients if context exists
    if (ctx) {
      bgDotsRef.current.forEach(dot => {
        const grd = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.rad);
        grd.addColorStop(0, `hsla(${confRef.current.hue + dot.hue}, 100%, 60%, 0.3)`);
        grd.addColorStop(1, `hsla(${confRef.current.hue + dot.hue}, 100%, 50%, 0)`);
        dot.gradient = grd;
      });
    }
  }, []);

  // Create a new line with pre-calculated values
  const createLine = useCallback(() => {
    const { w, h } = canvasSize.current;
    const conf = confRef.current;
    
    const rx = Math.random() * w + 100;
    const ry = Math.random() * h - 100;
    const lineLength = (Math.random() * (260 - 80) + 80) * conf.length;
    const hue = Math.random() * 50;
    
    return {
      x1: rx,
      y1: ry,
      x2: rx,
      y2: ry,
      length: lineLength,
      lengthSq: lineLength * lineLength, // Pre-calculate squared length
      width: (Math.random() * (15 - 5) + 5) * conf.width,
      v1: (Math.random() * (4 - 2) + 2) * conf.speed,
      v2: (Math.random() * (1 - 0.5) + 0.5) * conf.speed,
      half: false,
      hue: hue,
      opacity: conf.opacity,
      strokeStyle: `hsla(${conf.hue - hue}, 100%, 50%, ${conf.opacity})`,
    };
  }, []);

  // Emit new lines efficiently
  const emitLines = useCallback(() => {
    const maxLines = confRef.current.maxLines;
    const emitNum = confRef.current.emitNum;
    
    if (linesRef.current.length >= maxLines) return;
    
    const linesToAdd = Math.min(emitNum, maxLines - linesRef.current.length);
    for (let i = 0; i < linesToAdd; i++) {
      linesRef.current.push(createLine());
    }
  }, [createLine]);

  // Update a single line's position
  const updateLine = useCallback((line: Line): boolean => {
    const { h } = canvasSize.current;
    
    if (!line.half) {
      line.x1 -= line.v1;
      line.y1 += line.v1;
      line.x2 -= line.v2;
      line.y2 += line.v2;
      
      if (distSq(line.x1, line.y1, line.x2, line.y2) > line.lengthSq) {
        line.half = true;
      }
    } else {
      line.x1 -= line.v2;
      line.y1 += line.v2;
      line.x2 -= line.v1;
      line.y2 += line.v1;
    }
    
    // Return true if the line should be removed
    return (line.half && distSq(line.x1, line.y1, line.x2, line.y2) <= 100) ||
           (line.x1 < 0 && line.x2 < 0 && line.y1 > h && line.y2 > h);
  }, [distSq]);

  // Main render function
  const render = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    
    const { w, h } = canvasSize.current;
    
    // Clear with black background - more efficient than fillRect
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    
    // Render background gradients
    ctx.globalCompositeOperation = 'lighter';
    bgDotsRef.current.forEach(dot => {
      if (dot.gradient) {
        ctx.beginPath();
        ctx.fillStyle = dot.gradient;
        ctx.arc(dot.x, dot.y, dot.rad, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    
    // Batch properties that don't change per line
    ctx.lineCap = 'round';
    
    // Process lines in batches to improve performance
    let i = 0;
    while (i < linesRef.current.length) {
      const line = linesRef.current[i];
      
      // Render the line
      ctx.lineWidth = line.width;
      ctx.strokeStyle = line.strokeStyle;
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();
      
      // Update line position and check if it should be removed
      if (updateLine(line)) {
        // Efficient removal - swap with last element and pop
        linesRef.current[i] = linesRef.current[linesRef.current.length - 1];
        linesRef.current.pop();
      } else {
        i++;
      }
    }
    
    // Emit new lines
    emitLines();
    
    // Continue animation loop
    frameRef.current = requestAnimationFrame(render);
  }, [emitLines, updateLine]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Initialize
    initCanvas(canvas);
    updateBgDots();
    
    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        initCanvas(canvas);
        updateBgDots();
      }
    };
    window.addEventListener('resize', handleResize);
    
    // Start animation
    frameRef.current = requestAnimationFrame(render);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
    };
  }, [initCanvas, updateBgDots, render]);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default React.memo(Animation);
