import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-50 backdrop-blur-lg py-4 px-6 flex justify-between'
    >
      <h1 className='text-xl font-bold'>Akshay Babu T K</h1>
      <nav className='space-x-6 ' >
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#qualification'>Qualification</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>
    </motion.header>
  );
}