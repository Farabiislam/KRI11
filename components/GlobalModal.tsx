'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useGlobalModal } from '../app/context/ModalContext';
import {
  FiSearch,
  FiGithub,
  FiTwitter,
  FiMail,
  FiCopy,
  FiThumbsDown,
  FiLinkedin,
  FiInstagram,
  FiUser,
  FiBriefcase,
  FiFolder,
  FiBookOpen,
  FiSend,
  FiDownload,
} from 'react-icons/fi';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { toast } from 'sonner';

// Utility for clean tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 1. Quick Actions Data
const quickActionList = [
  // Utility
  {
    text: 'Copy Portfolio Link',
    icon: <FiCopy />,
    type: 1,
    textToCopy: 'https://kri11.vercel.app/',
  },
  {
    text: 'Download CV',
    icon: <FiDownload />,
    // Your specific Dropbox direct download link
    target:
      'https://drive.google.com/uc?export=download&id=1ptMQs_4QYtZ6KrZPjRa_U2y6x8WZosyR',
    type: 4, // Type 4 handles the direct link download
  },
  // Social
  {
    text: 'View GitHub',
    icon: <FiGithub />,
    target: 'https://github.com/Farabiislam',
    type: 2,
  },
  {
    text: 'Connect on LinkedIn',
    icon: <FiLinkedin />,
    target: 'https://www.linkedin.com/in/khandokar-rashidul-islam/',
    type: 2,
  },
  {
    text: 'Follow on Twitter',
    icon: <FiTwitter />,
    target: 'https://x.com/IslamRashi84813',
    type: 2,
  },
  {
    text: 'Follow on Instagram',
    icon: <FiInstagram />,
    target: 'https://www.instagram.com/farabii099/',
    type: 2,
  },
  {
    text: 'Send an Email',
    icon: <FiMail />,
    target: 'mailto:farabii099@gmail.com',
    type: 2,
  },

  // Portfolio Sections
  {
    text: 'About',
    icon: <FiUser />,
    target: '#about',
    type: 3,
  },
  // {
  //   text: 'Experience',
  //   icon: <FiBriefcase />,
  //   target: '#experience',
  //   type: 3,
  // },
  {
    text: 'Projects',
    icon: <FiFolder />,
    target: '#projects',
    type: 3,
  },
  {
    text: 'Articles',
    icon: <FiBookOpen />,
    target: '#articles',
    type: 3,
  },
  {
    text: 'Contact',
    icon: <FiSend />,
    target: '#contact',
    type: 3,
  },
];

export default function GlobalModal() {
  const { isOpen, toggleModal } = useGlobalModal();
  const [list, setList] = useState(quickActionList);
  const [cursor, setCursor] = useState(0);
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 10);
    } else {
      setSearch('');
      setList(quickActionList);
      setCursor(0);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleNav = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setCursor((prev) => Math.min(prev + 1, list.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCursor((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleAction(list[cursor]);
      }
    };

    window.addEventListener('keydown', handleNav);
    return () => window.removeEventListener('keydown', handleNav);
  }, [isOpen, cursor, list]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setList(
      quickActionList.filter((item) => item.text.toLowerCase().includes(value))
    );
    setCursor(0);
  };

  const handleAction = (item: (typeof quickActionList)[0]) => {
    if (!item) return;

    // Copy
    if (item.type === 1) {
      navigator.clipboard.writeText(item.textToCopy || '');
      toast.success('Portfolio link copied to clipboard!', { richColors: true });
    }

    // External link
    if (item.type === 2 && item.target) {
      window.open(item.target, '_blank');
    }

    // Internal section scroll
    if (item.type === 3 && item.target) {
      document.querySelector(item.target)?.scrollIntoView({
        behavior: 'smooth',
      });
    }
    // Direct link download
    if (item.type === 4 && item.target) {
      window.open(item.target, '_blank', 'noopener');
    }

    toggleModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex justify-center items-start pt-[15vh] sm:pt-[20vh] px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={toggleModal}
      />

      {/* Panel */}
      <div className="relative w-full max-w-[450px] bg-[#1e1e1e] border border-[#333] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Search */}
        <div className="flex items-center px-4 py-4 border-b border-[#333]">
          <FiSearch className="text-gray-500 mr-3" size={18} />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Type what you would like to do..."
            className="bg-transparent border-none outline-none text-white w-full text-sm"
          />
        </div>

        {/* List */}
        <ul className="max-h-[350px] overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30 ">
          {list.length > 0 ? (
            list.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setCursor(index)}
                onClick={() => handleAction(item)}
                className={cn(
                  'flex items-center px-4 py-3 cursor-pointer transition-colors',
                  cursor === index ? 'bg-[#333] text-white' : 'text-gray-400'
                )}
              >
                <span
                  className={cn(
                    'mr-4 transition-transform',
                    cursor === index && 'scale-125 text-blue-400'
                  )}
                >
                  {item.icon}
                </span>
                <p className="text-sm font-medium">{item.text}</p>
              </li>
            ))
          ) : (
            <div className="flex items-center px-5 py-8 text-gray-500 text-sm italic">
              <FiThumbsDown className="mr-3" /> Nothing here, try again
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
