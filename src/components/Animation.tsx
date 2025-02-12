import React, { useEffect, useRef } from 'react';

const Animation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const linesRef = useRef<{
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
  }[]>([]);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const w = (canvas.width = window.innerWidth);
      const h = (canvas.height = window.innerHeight);
      return { w, h };
    };

    const bgDots = [
      {
        rad: (updateCanvasSize().w + updateCanvasSize().h) / 2,
        x: updateCanvasSize().w / 2,
        y: 0,
        hue: 0,
      },
      {
        rad: (updateCanvasSize().w + updateCanvasSize().h) / 2,
        x: 0,
        y: updateCanvasSize().h,
        hue: -45,
      },
      {
        rad: (updateCanvasSize().w + updateCanvasSize().h) / 2,
        x: updateCanvasSize().w,
        y: updateCanvasSize().h,
        hue: -90,
      },
    ];

    const emitLine = () => {
      if (confRef.current.maxLines < linesRef.current.length) return;
      for (let i = 0; i < confRef.current.emitNum; i++) {
        const rx = Math.random() * updateCanvasSize().w + 100;
        const ry = Math.random() * updateCanvasSize().h - 100;
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

    const drawBackground = () => {
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < bgDots.length; i++) {
        const grd = ctx.createRadialGradient(
          bgDots[i].x,
          bgDots[i].y,
          0,
          bgDots[i].x,
          bgDots[i].y,
          bgDots[i].rad
        );
        grd.addColorStop(0, `hsla(${confRef.current.hue + bgDots[i].hue}, 100%, 60%, 0.3)`);
        grd.addColorStop(1, `hsla(${confRef.current.hue + bgDots[i].hue}, 100%, 50%, 0)`);
        ctx.beginPath();
        ctx.arc(bgDots[i].x, bgDots[i].y, bgDots[i].rad, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.closePath();
      }
    };

    const drawLines = () => {
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < linesRef.current.length; i++) {
        ctx.lineWidth = linesRef.current[i].width;
        ctx.beginPath();
        ctx.moveTo(linesRef.current[i].x1, linesRef.current[i].y1);
        ctx.lineTo(linesRef.current[i].x2, linesRef.current[i].y2);
        ctx.strokeStyle = `hsla(${confRef.current.hue - linesRef.current[i].hue}, 100%, 50%, ${confRef.current.opacity})`;
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.closePath();

        if (linesRef.current[i].half === false) {
          linesRef.current[i].x1 -= linesRef.current[i].v1;
          linesRef.current[i].y1 += linesRef.current[i].v1;
          linesRef.current[i].x2 -= linesRef.current[i].v2;
          linesRef.current[i].y2 += linesRef.current[i].v2;
          if (
            dist(
              linesRef.current[i].x1,
              linesRef.current[i].y1,
              linesRef.current[i].x2,
              linesRef.current[i].y2
            ) > linesRef.current[i].length
          ) {
            linesRef.current[i].half = true;
          }
        } else {
          linesRef.current[i].x1 -= linesRef.current[i].v2;
          linesRef.current[i].y1 += linesRef.current[i].v2;
          linesRef.current[i].x2 -= linesRef.current[i].v1;
          linesRef.current[i].y2 += linesRef.current[i].v1;
        }
      }
    };

    const clear = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.beginPath();
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, updateCanvasSize().w, updateCanvasSize().h);
      ctx.closePath();
    };

    const checkLines = () => {
      emitLine();
      for (let i = 0; i < linesRef.current.length; i++) {
        if (linesRef.current[i].half === true && dist(linesRef.current[i].x1, linesRef.current[i].y1, linesRef.current[i].x2, linesRef.current[i].y2) <= 10) {
          linesRef.current[i] = linesRef.current[linesRef.current.length - 1];
          linesRef.current.pop();
        } else if (linesRef.current[i].x1 < 0 && linesRef.current[i].x2 < 0 && linesRef.current[i].y1 > updateCanvasSize().h && linesRef.current[i].y2 > updateCanvasSize().h) {
          linesRef.current[i] = linesRef.current[linesRef.current.length - 1];
          linesRef.current.pop();
        }
      }
    };

    const generateLines = setInterval(checkLines, 10);

    const dist = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const render = () => {
      clear();
      drawBackground();
      drawLines();
      requestAnimationFrame(render);
    };
    render();

    return () => {
      clearInterval(generateLines);
    };
  }, []);

  return (
    <canvas id="animation" ref={canvasRef}></canvas>
  );
};

export default Animation;