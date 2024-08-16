// TextEffect.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const TextEffect = ({ text }) => {
  // Splitting the text into words for animation
  const words = text.split(' ');

  return (
    <p className="text-center text-3xl text-white font-bold">
      {words.map((word, index) => (
        <AnimatedWord key={index} word={word} />
      ))}
    </p>
  );
};

const AnimatedWord = ({ word }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return <animated.span style={props} className="inline-block mx-1">{word} </animated.span>;
};

export default TextEffect;
