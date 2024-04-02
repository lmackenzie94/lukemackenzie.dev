import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <p className="text-lg font-normal text-primary-content lg:text-xl mb-4">
        {greeting}
      </p>
      <button
        className="btn btn-secondary"
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
