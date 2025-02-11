import React, { useEffect, useRef } from 'react';

type Line = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  length: number;
  width: number;
  v1: number;
  v2: number;
  half: boolean;
  hue: number;
};

type BgDot = {
  rad: number;
  x: number;
  y: number;
  hue: number;
};

const Animation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const linesRef = useRef<Line[]>([]);
  const confRef = useRef({
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

  const initCanvas = (canvas: HTMLCanvasElement) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    canvasSize.current = { w, h };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    initCanvas(canvas);

    const updateBgDots = () => {
      const { w, h } = canvasSize.current;
      const rad = (w + h) / 2;
      bgDotsRef.current = [
        { rad, x: w / 2, y: 0, hue: 0 },
        { rad, x: 0, y: h, hue: -45 },
        { rad, x: w, y: h, hue: -90 },
      ];
    };
    updateBgDots();

    const handleResize = () => {
      initCanvas(canvas);
      updateBgDots();
    };
    window.addEventListener('resize', handleResize);

    const distSq = (x1: number, y1: number, x2: number, y2: number) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      return dx * dx + dy * dy;
    };

    const emitLine = () => {
      if (linesRef.current.length >= confRef.current.maxLines) return;
      const { w, h } = canvasSize.current;
      for (let i = 0; i < confRef.current.emitNum; i++) {
        const rx = Math.random() * w + 100;
        const ry = Math.random() * h - 100;
        linesRef.current.push({
          x1: rx,
          y1: ry,
          x2: rx,
          y2: ry,
          length: (Math.random() * (260 - 80) + 80) * confRef.current.length,
          width: (Math.random() * (15 - 5) + 5) * confRef.current.width,
          v1: (Math.random() * (4 - 2) + 2) * confRef.current.speed,
          v2: (Math.random() * (1 - 0.5) + 0.5) * confRef.current.speed,
          half: false,
          hue: Math.random() * 50,
        });
      }
    };

    const render = () => {
      const { w, h } = canvasSize.current;

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = 'lighter';
      bgDotsRef.current.forEach(dot => {
        const grd = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.rad);
        grd.addColorStop(0, `hsla(${confRef.current.hue + dot.hue}, 100%, 60%, 0.3)`);
        grd.addColorStop(1, `hsla(${confRef.current.hue + dot.hue}, 100%, 50%, 0)`);
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.rad, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.closePath();
      });

      for (let i = linesRef.current.length - 1; i >= 0; i--) {
        const line = linesRef.current[i];
        ctx.lineWidth = line.width;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.strokeStyle = `hsla(${confRef.current.hue - line.hue}, 100%, 50%, ${confRef.current.opacity})`;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.closePath();

        if (!line.half) {
          line.x1 -= line.v1;
          line.y1 += line.v1;
          line.x2 -= line.v2;
          line.y2 += line.v2;
          if (distSq(line.x1, line.y1, line.x2, line.y2) > line.length * line.length) {
            line.half = true;
          }
        } else {
          line.x1 -= line.v2;
          line.y1 += line.v2;
          line.x2 -= line.v1;
          line.y2 += line.v1;
        }

        if (line.half && distSq(line.x1, line.y1, line.x2, line.y2) <= 100) {
          linesRef.current[i] = linesRef.current[linesRef.current.length - 1];
          linesRef.current.pop();
        } else if (
          line.x1 < 0 &&
          line.x2 < 0 &&
          line.y1 > h &&
          line.y2 > h
        ) {
          linesRef.current[i] = linesRef.current[linesRef.current.length - 1];
          linesRef.current.pop();
        }
      }

      emitLine();

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas id="animation" ref={canvasRef} />;
};

export default Animation;
