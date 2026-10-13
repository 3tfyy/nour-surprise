// 1. القلوب والأزهار الطائرة في الخلفية
function createHeart() {
  const container = document.getElementById('heartsContainer');
  if (!container) return;
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  const items = ['🌸', '💖', '✨', '🌷', '🤍', '🌿'];
  heart.innerText = items[Math.floor(Math.random() * items.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 5 + 's';
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 350);

// 2. فحص الباسورد ودخول الصفحة
function checkPassword() {
  const correctPassword = "29/6/2002"; 
  const userInput = document.getElementById("passwordInput").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (userInput === correctPassword) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("surprise-screen").classList.remove("hidden");
    
    launchConfetti();

    const sweetMessage = 
      "عارف إن الأيام دي ضاغطة عليكي وإنك زعلانة أو شايلة همّ حاجات كتير..\n\n" +
      "بس حبيت أقولك إنك أقوى من أي فترة صعبة، وإن كل دا هيعدي. ضحكتك وراحتك بالدنيا كلها عندي، ومستعد أعمل أي حاجة عشان أشوف ابتسامتك دي تاني 🌸✨\n\n" +
      "خذي نفس عميق.. وخليكي فاكرة دايماً إن فيه حد هنا يحبك وواقف في ظهرك وجنبك في أي وقت! 💖";

    typeEffect(sweetMessage, "typingText");
  } else {
    errorMsg.innerText = "الباسورد غلط! افتكري التاريخ كويس 😜";
  }
}

// 3. تشغيل ملف الصوت بتاع الضحكة
function playLaughAudio() {
  const audio = document.getElementById("laughAudio");
  if (audio) {
    audio.play().catch(error => console.log("Audio play error: ", error));
  }
  popLove('الضحكة دي أحلى حاجة في الدنيا كلها! ❤️');
}

// 4. إظهار وإخفاء الصورة عند الضغط على "أنا جنبك دايماً"
function showSidePhoto() {
  document.getElementById("photo-modal").classList.remove("hidden");
  launchConfetti();
}

function closeSidePhoto() {
  document.getElementById("photo-modal").classList.add("hidden");
}

// 5. تأثير كتابة النص حرف حرف
function typeEffect(text, elementId) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
}

// 6. أزرار تفاعلية
function popLove(msg) {
  document.getElementById("toast-msg").innerText = msg;
  launchConfetti();
}

// تأثير الـ Confetti
function launchConfetti() {
  confetti({
    particleCount: 40,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff758c', '#ff7eb3', '#ffffff', '#ffb6c1']
  });
}

// Enter Key للسهولة
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("passwordInput");
  if (input) {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") checkPassword();
    });
  }
});