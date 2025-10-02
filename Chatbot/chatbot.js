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
              return "Halo! Bagaimana saya bisa membantu Anda?";
          } else if (lowerCaseMessage.includes('jadwalkan') || lowerCaseMessage.includes('janji temu')) {
              return "Anda dapat menjadwalkan janji temu dengan mengeklik tombol 'Cari Dokter' di halaman beranda kami.";
          } else if (lowerCaseMessage.includes('jam') || lowerCaseMessage.includes('buka')) {
              return "Klinik kami buka dari pukul 9 pagi hingga 5 sore, dari hari Senin sampai Jumat.";
          } else if (lowerCaseMessage.includes('bawa') || lowerCaseMessage.includes('apa yang dibawa')) {
              return "Mohon bawa KTP (Kartu Tanda Penduduk) Anda, kartu asuransi, dan catatan medis yang relevan.";
          } else if (lowerCaseMessage.includes('asuransi')) {
              return "Kami menerima sebagian besar asuransi besar. Mohon hubungi kantor kami untuk memastikan paket Anda.";
          } else if (lowerCaseMessage.includes('terimakasih')) {
              return "Sama-sama! Jangan ragu untuk bertanya jika Anda punya pertanyaan lain.";
          } else if (lowerCaseMessage.includes('tolong')) {
              return "Saya bisa membantu dengan pertanyaan tentang janji temu, jam buka klinik, dan informasi umum.";
          } else {
              return "Maaf, saya tidak paham. Tolong jelaskan lagi dengan kata-kata berbeda?";
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