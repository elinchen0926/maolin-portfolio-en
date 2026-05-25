import { useState } from 'react';

const MENU_OPTIONS = [
  { key: 'about', label: 'About Me', target: '#about' },
  { key: 'skills', label: 'Skills', target: '#skills' },
  { key: 'experience', label: 'Experience', target: '#experience' },
  { key: 'projects', label: 'Projects', target: '#projects' },
  { key: 'contact', label: 'Contact', target: '#contact' },
];

const getWelcomeMessage = () => ({
  sender: 'bot',
  text: 'Hi! You can use the quick options below to explore my portfolio:',
  type: 'menu',
  options: MENU_OPTIONS,
});

export const useChat = (initialMessages) => {
  const [messages, setMessages] = useState(
    initialMessages?.length ? initialMessages : [getWelcomeMessage()]
  );
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const jumpToSection = (target) => {
    const id = target.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', target);
    }
  };

  const handleMenuClick = (option) => {
    const userMsg = { sender: 'user', text: `Show me: ${option.label}` };
    const botMsg = { sender: 'bot', text: `Sure — taking you to ${option.label}.` };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    jumpToSection(option.target);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const raw = input.trim();
    if (!raw) return;

    setLoading(true);
    const userInput = raw.toLowerCase();
    const newUserMessage = { sender: 'user', text: raw };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');

    const map = [
      { keys: ['about', 'about me', 'intro', 'introduction', '关于', '自我介绍'], optionKey: 'about' },
      { keys: ['skills', 'skill', 'abilities', '能力', '技能'], optionKey: 'skills' },
      { keys: ['experience', 'internship', 'internships', 'work experience', '实习', '经历'], optionKey: 'experience' },
      { keys: ['project', 'projects', 'portfolio', '项目'], optionKey: 'projects' },
      { keys: ['contact', 'email', 'phone', 'linkedin', 'github', '联系', '邮箱'], optionKey: 'contact' },
    ];

    const matched = map.find((m) => m.keys.some((k) => userInput.includes(k)));

    if (matched) {
      const option = MENU_OPTIONS.find((o) => o.key === matched.optionKey);
      if (option) {
        const botMsg = { sender: 'bot', text: `Got it — taking you to ${option.label}.` };
        setMessages((prev) => [...prev, botMsg]);
        jumpToSection(option.target);
        setLoading(false);
        return;
      }
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: 'bot',
        text: 'I am currently a navigation assistant. You can type: about, skills, experience, projects, or contact — or use the quick options below.',
        type: 'menu',
        options: MENU_OPTIONS,
      },
    ]);

    setLoading(false);
  };

  return {
    messages,
    input,
    setInput,
    loading,
    handleSend,
    handleMenuClick,
  };
};