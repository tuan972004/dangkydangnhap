document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');                    
    const loginForm = document.getElementById('login-form');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');

    // Hiển thị form đăng ký
    registerLink.addEventListener('click', function () {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        registerLink.classList.add('hidden');
        loginLink.classList.remove('hidden');
    });

    // Hiển thị form đăng nhập
    loginLink.addEventListener('click', function () {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        loginLink.classList.add('hidden');
        registerLink.classList.remove('hidden');
    });

    // Xử lý đăng ký
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const city = document.getElementById('city').value;

        if (email && password && city) {
            // Lưu thông tin vào localStorage
            localStorage.setItem('registeredEmail', email);
            localStorage.setItem('registeredPassword', password);
            localStorage.setItem('registeredCity', city);

            alert('Đăng ký thành công!');
            registerForm.reset();
        } else {
            alert('Vui lòng điền đầy đủ thông tin!');
        }
    });

    // Xử lý đăng nhập
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailLogin = document.getElementById('email-login').value;
        const passwordLogin = document.getElementById('password-login').value;

        // Lấy thông tin từ localStorage để kiểm tra
        const registeredEmail = localStorage.getItem('registeredEmail');
        const registeredPassword = localStorage.getItem('registeredPassword');

        if (emailLogin === registeredEmail && passwordLogin === registeredPassword) {
            alert('Đăng nhập thành công!');
            loginForm.reset();
            // Chuyển hướng hoặc thực hiện một hành động khác sau khi đăng nhập thành công
        } else {
            alert('Email hoặc mật khẩu không chính xác!');
        }
    });
});
