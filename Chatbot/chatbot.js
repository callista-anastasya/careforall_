const chatForm = document.getElementById('chat-form');
      const userInput = document.getElementById('user-input');
      const isiChat = document.getElementById('isichat');
      const tombolSiapSaji = document.querySelectorAll('.tombolsiapsaji .btn');

      function appendMessage(sender, pesan) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('pesan', sender);
        messageDiv.textContent = pesan;
        isiChat.appendChild(messageDiv);
        isiChat.scrollTop = isiChat.scrollHeight;
      }

      function getBotResponse(pesan) {
          const lowerCaseMessage = pesan.toLowerCase();
          
          if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
              return "Hello there! How can I assist you?";
          } else if (lowerCaseMessage.includes('schedule') || lowerCaseMessage.includes('appointment')) {
              return "You can schedule an appointment by clicking the 'Find a Doctor' button on our homepage.";
          } else if (lowerCaseMessage.includes('hours') || lowerCaseMessage.includes('open')) {
              return "Our clinic hours are 9 AM to 5 PM, Monday to Friday.";
          } else if (lowerCaseMessage.includes('bring') || lowerCaseMessage.includes('what to bring')) {
              return "Please bring your ID, insurance card, and any relevant medical records.";
          } else if (lowerCaseMessage.includes('insurance')) {
              return "We accept most major insurance providers. Please contact our office to verify your plan.";
          } else if (lowerCaseMessage.includes('thank')) {
              return "You're welcome! Feel free to ask if you have more questions.";
          } else if (lowerCaseMessage.includes('help')) {
              return "I can help with questions about appointments, clinic hours, and general information.";
          } else {
              return "I'm sorry, I didn't understand that. Can you please rephrase?";
          }
      }

      chatForm.addEventListener('submit', function(event) {
          event.preventDefault(); 
          const userMessage = userInput.value.trim();
          if (userMessage) {
              appendMessage('user', userMessage);
              setTimeout(() => {
              const botMessage = getBotResponse(userMessage);
              appendMessage('bot', botMessage);
              }, 500); 
              userInput.value = '';
          }
      });

      tombolSiapSaji.forEach(button => {
          button.addEventListener('click', function() {
              const query = this.getAttribute('data-query');
              appendMessage('user', query);
              setTimeout(() => {
                  const botMessage = getBotResponse(query);
                  appendMessage('bot', botMessage);
              }, 500);
          });
      }); 