"use client";

import React, { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('clickable')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseOut = () => {
      cursorX.set(-100);
      cursorY.set(-100);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mouseout', handleMouseOut);
    };

  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={styles.cursor}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? 'rgba(156, 254, 202, 0.15)' : 'rgba(156, 254, 202, 0.03)',
          borderColor: isHovered ? 'rgba(156, 254, 202, 0.8)' : 'rgba(156, 254, 202, 0.4)',
          borderWidth: isHovered ? '2px' : '1px'
        }}
      />
      <motion.div
        className={styles.cursorDot}
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? '#fff' : '#9cfeca'
        }}
      />
    </>
  );
};

export default CustomCursor;
