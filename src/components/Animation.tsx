/**
 * Animation Component
 * 
 * This component creates a dynamic canvas animation with lines that move across the screen,
 * creating a flowing effect against a gradient background. It uses requestAnimationFrame
 * for smooth animation and handles window resizing automatically.
 */
import React, { useEffect, useRef, useCallback } from 'react';

/**
 * Defines a line object with properties for position, movement, appearance, and state.
 */
type Line = {
  x1: number;        // Starting x-coordinate
  y1: number;        // Starting y-coordinate
  x2: number;        // Ending x-coordinate
  y2: number;        // Ending y-coordinate
  length: number;    // Target length of the line
  lengthSq: number;  // Squared length for distance calculations (optimization)
  width: number;     // Width/thickness of the line
  v1: number;        // Velocity of the first point
  v2: number;        // Velocity of the second point
  half: boolean;     // Flag to track if the line has reached its target length
  hue: number;       // Color hue variation
  opacity: number;   // Transparency of the line
  strokeStyle: string; // CSS color string for drawing the line
};

/**
 * Defines a background dot with radial gradient properties.
 */
type BgDot = {
  rad: number;           // Radius of the dot's gradient effect
  x: number;             // X-coordinate
  y: number;             // Y-coordinate
  hue: number;           // Color hue offset
  gradient: CanvasGradient | null; // Cached gradient object for rendering
};

/**
 * Configuration settings for the animation behavior.
 */
type Config = {
  hue: number;      // Base hue for color calculations
  shadow: boolean;  // Whether to apply shadow effects (unused in current implementation)
  width: number;    // Multiplier for line width
  length: number;   // Multiplier for line length
  emitNum: number;  // Number of lines to emit per frame
  speed: number;    // Multiplier for line movement speed
  opacity: number;  // Base opacity value for lines
  maxLines: number; // Maximum number of lines allowed on screen
};

/**
 * Main animation component that renders and manages the canvas animation.
 */
const Animation: React.FC = () => {
  // Reference to the canvas DOM element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Reference to the 2D rendering context
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  
  // Array of all active line objects
  const linesRef = useRef<Line[]>([]);
  
  // Reference to the current animation frame ID for cancellation
  const frameRef = useRef<number>(0);
  
  // Animation pause state
  const isPausedRef = useRef<boolean>(false);
  
  // Animation configuration settings
  const confRef = useRef<Config>({
    hue: 5,          // Reddish base hue
    shadow: false,   // Shadows disabled
    width: 1.25,     // Default width multiplier
    length: 1,       // Default length multiplier
    emitNum: 2,      // Emit 2 new lines per frame
    speed: 1,        // Default speed multiplier
    opacity: 0.6,    // Lines are partially transparent
    maxLines: 75,   // Up to 75 lines can exist simultaneously
  });
  
  // Current canvas dimensions
  const canvasSize = useRef({ w: window.innerWidth, h: window.innerHeight });
  
  // Background gradient dots
  const bgDotsRef = useRef<BgDot[]>([]);
  
  /**
   * Calculates the squared distance between two points.
   * Using squared distance is more efficient as it avoids unnecessary square root calculations.
   */
  const distSq = useCallback((x1: number, y1: number, x2: number, y2: number): number => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return dx * dx + dy * dy;
  }, []);

  /**
   * Sets up the canvas with the correct dimensions and gets the rendering context.
   * @param canvas - The canvas element to initialize
   */
  const initCanvas = useCallback((canvas: HTMLCanvasElement) => {
    // Set canvas size to match window dimensions
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    canvasSize.current = { w, h };
    
    // Get the rendering context if not already obtained
    if (!ctxRef.current) {
      // Alpha false improves performance since we're covering the entire canvas each frame
      const ctx = canvas.getContext('2d', { alpha: false });
      if (ctx) {
        ctxRef.current = ctx;
      }
    }
  }, []);

  /**
   * Creates and updates the background gradient dots.
   * These dots create a colorful gradient background effect.
   */
  const updateBgDots = useCallback(() => {
    const { w, h } = canvasSize.current;
    const rad = (w + h) / 2; // Radius covers diagonal of screen
    const ctx = ctxRef.current;
    
    // Define three gradient sources at different positions
    bgDotsRef.current = [
      { rad, x: w / 2, y: 0, hue: 0, gradient: null },     // Top center
      { rad, x: 0, y: h, hue: -45, gradient: null },       // Bottom left
      { rad, x: w, y: h, hue: -90, gradient: null },       // Bottom right
    ];
    
    // Create gradient objects for each dot if context exists
    if (ctx) {
      bgDotsRef.current.forEach(dot => {
        const grd = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.rad);
        grd.addColorStop(0, `hsla(${confRef.current.hue + dot.hue}, 100%, 60%, 0.3)`);
        grd.addColorStop(1, `hsla(${confRef.current.hue + dot.hue}, 100%, 50%, 0)`);
        dot.gradient = grd;
      });
    }
  }, []);

  /**
   * Creates a new line with randomized properties based on configuration.
   * @returns A new Line object ready to be animated
   */
  const createLine = useCallback(() => {
    const { w, h } = canvasSize.current;
    const conf = confRef.current;
    
    // Random starting position, slightly off-screen to the right
    const rx = Math.random() * w + 100;
    const ry = Math.random() * h - 100;
    
    // Random line length between 80-260 pixels, modified by config
    const lineLength = (Math.random() * (260 - 80) + 80) * conf.length;
    
    // Random hue variation
    const hue = Math.random() * 50;
    
    // Create and return the line object
    return {
      x1: rx,
      y1: ry,
      x2: rx,  // Initially both points are at the same position
      y2: ry,
      length: lineLength,
      lengthSq: lineLength * lineLength, // Pre-calculate squared length for efficiency
      width: (Math.random() * (15 - 5) + 5) * conf.width, // Random width between 5-15px
      v1: (Math.random() * (4 - 2) + 2) * conf.speed,     // Velocity for first point
      v2: (Math.random() * (1 - 0.5) + 0.5) * conf.speed, // Velocity for second point
      half: false, // Tracks animation phase
      hue: hue,
      opacity: conf.opacity,
      strokeStyle: `hsla(${conf.hue - hue}, 100%, 50%, ${conf.opacity})`, // Line color
    };
  }, []);

  /**
   * Creates new line objects and adds them to the animation.
   * Respects the maximum line count from configuration.
   */
  const emitLines = useCallback(() => {
    const maxLines = confRef.current.maxLines;
    const emitNum = confRef.current.emitNum;
    
    // Don't add more lines if we're at the maximum
    if (linesRef.current.length >= maxLines) return;
    
    // Add up to emitNum lines, but don't exceed maxLines
    const linesToAdd = Math.min(emitNum, maxLines - linesRef.current.length);
    for (let i = 0; i < linesToAdd; i++) {
      linesRef.current.push(createLine());
    }
  }, [createLine]);

  /**
   * Updates a line's position and determines if it should be removed.
   * @param line - The line object to update
   * @returns Boolean indicating if the line should be removed
   */
  const updateLine = useCallback((line: Line): boolean => {
    const { h } = canvasSize.current;
    
    if (!line.half) {
      // First phase: points grow apart as they move
      line.x1 -= line.v1;
      line.y1 += line.v1;
      line.x2 -= line.v2;
      line.y2 += line.v2;
      
      // Check if line has reached its target length
      if (distSq(line.x1, line.y1, line.x2, line.y2) > line.lengthSq) {
        line.half = true;
      }
    } else {
      // Second phase: points move at different rates to create different effects
      line.x1 -= line.v2;
      line.y1 += line.v2;
      line.x2 -= line.v1;
      line.y2 += line.v1;
    }
    
    // Return true if the line should be removed:
    // Either it's in second phase and points are close again, or it's moved off-screen
    return (line.half && distSq(line.x1, line.y1, line.x2, line.y2) <= 100) ||
           (line.x1 < 0 && line.x2 < 0 && line.y1 > h && line.y2 > h);
  }, [distSq]);

  /**
   * Pause the animation to save CPU when not visible
   */
  const pauseAnimation = useCallback(() => {
    isPausedRef.current = true;
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    }
  }, []);

  /**
   * Resume the animation when visible again
   */
  const resumeAnimation = useCallback(() => {
    if (isPausedRef.current) {
      isPausedRef.current = false;
      frameRef.current = requestAnimationFrame(render);
    }
  }, []);

  /**
   * Main rendering function that draws a single frame of animation.
   * Uses requestAnimationFrame for smooth rendering.
   */
  const render = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx || isPausedRef.current) return;
    
    const { w, h } = canvasSize.current;
    
    // Clear the canvas with black background
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    
    // Draw background gradient dots with additive blending
    ctx.globalCompositeOperation = 'lighter';
    bgDotsRef.current.forEach(dot => {
      if (dot.gradient) {
        ctx.beginPath();
        ctx.fillStyle = dot.gradient;
        ctx.arc(dot.x, dot.y, dot.rad, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    
    // Set line drawing style
    ctx.lineCap = 'round';
    
    // Update and draw each line
    let i = 0;
    while (i < linesRef.current.length) {
      const line = linesRef.current[i];
      
      // Draw the line
      ctx.lineWidth = line.width;
      ctx.strokeStyle = line.strokeStyle;
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();
      
      // Update the line and check if it should be removed
      if (updateLine(line)) {
        // Remove line by replacing with the last line and popping the array
        // This is more efficient than splicing
        linesRef.current[i] = linesRef.current[linesRef.current.length - 1];
        linesRef.current.pop();
      } else {
        i++;
      }
    }
    
    // Create new lines
    emitLines();
    
    // Schedule the next frame
    frameRef.current = requestAnimationFrame(render);
  }, [emitLines, updateLine]);

  /**
   * Effect to initialize the animation when the component mounts
   * and clean up when it unmounts.
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set up the canvas and background
    initCanvas(canvas);
    updateBgDots();
    
    // Handle window resizing
    const handleResize = () => {
      if (canvas) {
        initCanvas(canvas);
        updateBgDots();
      }
    };

    // Handle visibility change to pause/resume animation
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseAnimation();
      } else {
        resumeAnimation();
      }
    };

    // Add event listeners
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Start the animation loop
    frameRef.current = requestAnimationFrame(render);
    
    // Clean up event listeners and animation frame on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(frameRef.current);
    };
  }, [initCanvas, updateBgDots, render, pauseAnimation]);

  // Render a fullscreen canvas element
  return <canvas 
    ref={canvasRef} 
    style={{ 
      display: 'block',
      willChange: 'transform'
    }}
    loading="lazy"
  />;
};

// Use memo to prevent unnecessary re-renders
export default React.memo(Animation);
