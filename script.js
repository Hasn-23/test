document.addEventListener('DOMContentLoaded', () => {

  // --- كود إنشاء حساب ---
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = signupForm.name.value.trim();
      const email = signupForm.email.value.toLowerCase().trim();
      const password = signupForm.password.value;
      const confirmPassword = signupForm.confirmPassword.value;

      // إزالة رسائل سابقة
      const oldMsg = signupForm.querySelector('.message');
      if (oldMsg) oldMsg.remove();

      const messageDiv = document.createElement('div');
      messageDiv.style.marginTop = '15px';
      messageDiv.style.fontWeight = 'bold';

      if (!name || !email || !password || !confirmPassword) {
        messageDiv.textContent = 'جميع الحقول مطلوبة';
        messageDiv.style.color = 'red';
        signupForm.appendChild(messageDiv);
        return;
      }

      if (password !== confirmPassword) {
        messageDiv.textContent = 'كلمة المرور وتأكيدها غير متطابقين';
        messageDiv.style.color = 'red';
        signupForm.appendChild(messageDiv);
        return;
      }

      // جلب المستخدمين من localStorage
      let users = JSON.parse(localStorage.getItem('users')) || [];

      if (users.find(user => user.email === email)) {
        messageDiv.textContent = 'هذا البريد الإلكتروني مسجل مسبقًا';
        messageDiv.style.color = 'red';
        signupForm.appendChild(messageDiv);
        return;
      }

      // إضافة المستخدم الجديد
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));

      messageDiv.textContent = 'تم إنشاء الحساب بنجاح!';
      messageDiv.style.color = 'green';
      signupForm.appendChild(messageDiv);

      // توجيه لصفحة pro.html بعد 2 ثانية
      setTimeout(() => {
        window.location.href = 'pro.html';
      }, 2000);
    });
  }

  // --- كود تسجيل دخول ---
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = loginForm.email.value.toLowerCase().trim();
      const password = loginForm.password.value;

      // إزالة رسائل سابقة
      const oldMsg = loginForm.querySelector('.message');
      if (oldMsg) oldMsg.remove();

      const messageDiv = document.createElement('div');
      messageDiv.style.marginTop = '15px';
      messageDiv.style.fontWeight = 'bold';

      // جلب المستخدمين من localStorage
      let users = JSON.parse(localStorage.getItem('users')) || [];

      // البحث عن المستخدم بالمطابقة الكاملة للإيميل وكلمة المرور
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        messageDiv.textContent = 'تم تسجيل الدخول بنجاح!';
        messageDiv.style.color = 'green';
        loginForm.appendChild(messageDiv);

        // توجيه بعد 1.5 ثانية
        setTimeout(() => {
          window.location.href = 'pro.html';
        }, 1500);
      } else {
        messageDiv.textContent = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
        messageDiv.style.color = 'red';
        loginForm.appendChild(messageDiv);
      }
    });
  }

});
// تبديل بين الثيم الفاتح والداكن
toggleThemeBtn.addEventListener('click', function() {
    darkTheme = !darkTheme;
    if(darkTheme) {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
});
