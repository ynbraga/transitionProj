const corpo = document.querySelector('.corpo');
const registro = document.querySelector('.registro-link');
const login = document.querySelector('.login-link');
const btnEntrar = document.querySelector('.btn-login');
const btnFechar = document.querySelector('.icone-fechar');

registro.addEventListener('click', ()=> {
    corpo.classList.add('active');
});

login.addEventListener('click', ()=> {
    corpo.classList.remove('active');
});

btnEntrar.addEventListener('click', ()=> {
    corpo.classList.add('active-botao');
});

btnFechar.addEventListener('click', ()=> {
    corpo.classList.remove('active-botao');
});


