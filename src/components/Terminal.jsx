import { useState, useRef, useEffect } from 'react';
import { terminalCommands } from '../data/personalData';

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', lines: ['Welcome to aadi.terminal v1.0.0', 'Type "help" to see available commands.', ''] },
  ]);
  const [input, setInput] = useState('');
  const [gameState, setGameState] = useState(null);
  const [gameTarget, setGameTarget] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      isMounted.current = true;
    }
  }, [history]);

  const processCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();

    // Add the command to history
    const newHistory = [...history, { type: 'command', text: cmd }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      setGameState(null);
      return;
    }

    // Handle number guessing game
    if (gameState === 'playing') {
      const guess = parseInt(trimmed);
      if (isNaN(guess)) {
        newHistory.push({ type: 'output', lines: ['Please enter a valid number between 1 and 100.'] });
      } else if (guess < gameTarget) {
        newHistory.push({ type: 'output', lines: ['📈 Too low! Try a higher number.'] });
      } else if (guess > gameTarget) {
        newHistory.push({ type: 'output', lines: ['📉 Too high! Try a lower number.'] });
      } else {
        newHistory.push({ type: 'output', lines: ['🎉 Correct! You guessed it!', 'Type "game" to play again or "help" for other commands.'] });
        setGameState(null);
      }
      setHistory(newHistory);
      setInput('');
      return;
    }

    // Handle Rock Paper Scissors game
    if (gameState === 'rps') {
      const choices = ['rock', 'paper', 'scissors'];
      if (!choices.includes(trimmed)) {
        newHistory.push({ type: 'output', lines: ['❌ Invalid choice! Please enter "rock", "paper", or "scissors".'] });
      } else {
        const cpuChoice = choices[Math.floor(Math.random() * 3)];
        let result = '';
        if (trimmed === cpuChoice) {
          result = '🤝 It\'s a tie!';
        } else if (
          (trimmed === 'rock' && cpuChoice === 'scissors') ||
          (trimmed === 'paper' && cpuChoice === 'rock') ||
          (trimmed === 'scissors' && cpuChoice === 'paper')
        ) {
          result = '🎉 You win!';
        } else {
          result = '😢 Computer wins!';
        }
        newHistory.push({
          type: 'output',
          lines: [
            `You chose: ${trimmed.toUpperCase()}`,
            `Computer chose: ${cpuChoice.toUpperCase()}`,
            result,
            'Type "rps" to play again or "help" for other commands.'
          ]
        });
        setGameState(null);
      }
      setHistory(newHistory);
      setInput('');
      return;
    }

    // Handle Trivia Quiz game
    if (gameState === 'quiz') {
      if (trimmed === 'b') {
        newHistory.push({
          type: 'output',
          lines: ['🎉 Correct! You\'re a certified Full Stack Developer.', 'Type "quiz" to try again or "help" for other commands.']
        });
      } else if (['a', 'c', 'd'].includes(trimmed)) {
        newHistory.push({
          type: 'output',
          lines: ['❌ Wrong answer! The correct answer was B) <video>.', 'Type "quiz" to try again or "help" for other commands.']
        });
      } else {
        newHistory.push({ type: 'output', lines: ['❌ Invalid option! Please enter A, B, C, or D.'] });
      }
      setGameState(null);
      setHistory(newHistory);
      setInput('');
      return;
    }

    if (trimmed === 'game') {
      const target = Math.floor(Math.random() * 100) + 1;
      setGameTarget(target);
      setGameState('playing');
      newHistory.push({
        type: 'output',
        lines: ['🎮 Number Guessing Game!', 'I\'m thinking of a number between 1 and 100.', 'Enter your guess:'],
      });
    } else if (trimmed === 'rps') {
      setGameState('rps');
      newHistory.push({
        type: 'output',
        lines: ['🎮 Rock Paper Scissors Game!', 'Choose your weapon: "rock", "paper", or "scissors":']
      });
    } else if (trimmed === 'quiz') {
      setGameState('quiz');
      newHistory.push({
        type: 'output',
        lines: [
          '❓ Web Developer Trivia Quiz!',
          'Question: Which HTML5 tag is used to embed a native video player?',
          'A) <embed>   B) <video>   C) <movie>   D) <media>',
          'Enter your option (A, B, C, or D):'
        ]
      });
    } else if (trimmed === 'matrix') {
      newHistory.push({
        type: 'output',
        lines: [
          '01000001 01000001 01000100 01001001 01010011 01011001 01010011',
          '⚡ MATRIX RUNTIME CORE DETECTED...',
          '101001010101010010101010100101010101001010101010010101',
          '011001100110011001100110011001100110011001100110011001',
          'SYSTEM STATUS: NOMINAL. WTF AADI MODE ENABLED.',
          'Decrypted message: "Dream big. Build bigger."',
        ]
      });
    } else if (terminalCommands[trimmed]) {
      newHistory.push({ type: 'output', lines: terminalCommands[trimmed] });
    } else if (trimmed === '') {
      // Do nothing for empty input
    } else {
      newHistory.push({
        type: 'output',
        lines: [`Command not found: ${cmd}`, 'Type "help" to see available commands.'],
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(input);
    }
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto bg-black border-4 border-black rounded-2xl shadow-neo overflow-hidden flex flex-col font-mono text-sm sm:text-base"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="bg-gray-200 border-b-4 border-black px-4 py-2 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-custom-red border-2 border-black" />
          <div className="w-3 h-3 rounded-full bg-custom-yellow border-2 border-black" />
          <div className="w-3 h-3 rounded-full bg-custom-green border-2 border-black" />
        </div>
        <span className="ml-2 font-mono text-sm font-bold text-black">guest@aadi:~$</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 h-64 overflow-y-auto bg-black text-custom-blue custom-scrollbar">
        {history.map((entry, i) => (
          <div key={i} className={`mb-1 ${entry.type === 'command' ? 'text-white' : 'text-custom-blue'}`}>
            {entry.type === 'command' ? (
              <div>
                <span className="text-custom-green mr-2">guest@aadi:~$</span>
                <span>{entry.text}</span>
              </div>
            ) : (
              entry.lines.map((line, j) => (
                <div key={j}>{line || '\u00A0'}</div>
              ))
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center mt-2">
          <span className="text-custom-green mr-2">guest@aadi:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-custom-blue caret-custom-blue font-mono"
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal command line input"
          />
          <span className="inline-block w-2 h-4 bg-custom-blue ml-0.5 animate-pulse" />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
