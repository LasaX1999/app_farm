'use client'
import { useEffect } from 'react';

export default function ChatbotPage() {
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@denserai/embed-chat@1/dist/web.min.js";
    script.type = "module";
    script.onload = () => {
      // Initialize the chatbot after the script is loaded
      if (typeof Chatbot !== 'undefined') {
        Chatbot.init({
          chatbotId: "a2bcc4d2-4b52-4377-b35b-fbbc3ae484d5",
        });
      } else {
        console.error('Chatbot library not found');
      }
    };

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup: remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
     
      <div id="chatbot-container"></div> {/* Optional: Chatbot will render here if required */}
    </div>
  );
}
