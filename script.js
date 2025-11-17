const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animar)

function animar(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}

function handleSubmit(event){
    event.preventDefault();
    
    const form = document.getElementById('volunteerForm');

    const formData ={
        nome : form.nome.value,
        email : form.email.value,
        senha : form.senha.value,
        data : form.data.value,
        endereço : form.endereço.value,
        cep : form.cep.value,
        cidade : form.cidade.value,
        estado : form.estado.value,
        dataCadastro : new Date().toLocaleDateString()
    }
voluntarios.forEach(v => {
        html += `<tr>
            <td>${v.nome}</td>
            <td>${v.email}</td>
            <td>${v.telefone}</td>
            <td>${v.idade}</td>
            <td>${v.disponibilidade}</td>
            <td>${v.areaInteresse}</td>
            <td>${v.dataCadastro}</td>
        </tr>`;
    });
let voluntarios = JSON.parse(localStorage.getItem('voluntarios') || []);
    voluntarios.push(formData);
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');
    successMessage.scrollIntoView({behavior: 'smooth', block:'center'});

    setTimeout(()=> form.reset(),2000);
    setTimeout(()=> successMessage.classList.remove('show'),3000);

    exibirVoluntarios();
}

function exibirVoluntarios(){
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    const tabelaContainer = document.getElementById('tabelaVoluntarios');

    if(!tabelaContainer) return;
    if(voluntarios.length === 0) {
        tabelaContainer.innerHTML = '<p>Nenhum voluntario cadastrado</p>';
    }
}
