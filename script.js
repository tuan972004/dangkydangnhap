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

    // Xử lý đăng ký (ví dụ đơn giản)
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Đăng ký thành công!');
    });

    // Xử lý đăng nhập (ví dụ đơn giản)
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Đăng nhập thành công!');
    });
});