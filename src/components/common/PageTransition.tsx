import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { motionConfig } from '../../utils/motionConfig';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={motionConfig.pageEnter.initial}
      animate={motionConfig.pageEnter.animate}
      exit={motionConfig.pageEnter.exit}
      transition={motionConfig.pageEnter.transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};
