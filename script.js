const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade');

const estadosECidades = {
  'AC': ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira', 'Tarauacá', 'Feijó'],
  'AL': ['Maceió', 'Arapiraca', 'Rio Largo', 'Palmeira dos Índios', 'União dos Palmares'],
  'AP': ['Macapá', 'Santana', 'Laranjal do Jari', 'Oiapoque', 'Mazagão'],
  'AM': ['Manaus', 'Parintins', 'Itacoatiara', 'Manacapuru', 'Coari'],
  'BA': ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Itabuna'],
  'CE': ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú', 'Sobral'],
  'DF': ['Brasília'],
  'ES': ['Serra', 'Vila Velha', 'Cariacica', 'Vitória', 'Cachoeira de Itapemirim'],
  'GO': ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Luziânia'],
  'MA': ['São Luís', 'Imperatriz', 'São José de Ribamar', 'Caxias', 'Timon'],
  'MT': ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop', 'Tangará da Serra'],
  'MS': ['Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá', 'Ponta Porã'],
  'MG': ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim'],
  'PA': ['Belém', 'Ananindeua', 'Santarém', 'Marabá', 'Parauapebas'],
  'PB': ['João Pessoa', 'Campina Grande', 'Santa Rita', 'Patos', 'Bayeux'],
  'PR': ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel'],
  'PE': ['Recife', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru', 'Petrolina'],
  'PI': ['Teresina', 'Parnaíba', 'Picos', 'Piripiri', 'Floriano'],
  'RJ': ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Niterói'],
  'RN': ['Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante', 'Macaíba'],
  'RS': ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas', 'Santa Maria'],
  'RO': ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Vilhena', 'Cacoal'],
  'RR': ['Boa Vista', 'Rorainópolis', 'Caracaraí', 'Alto Alegre', 'Mucajaí'],
  'SC': ['Joinville', 'Florianópolis', 'Blumenau', 'São José', 'Chapecó'],
  'SP': ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André'],
  'SE': ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana', 'São Cristóvão'],
  'TO': ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Paraíso do Tocantins']
};

function preencherCidades(siglaEstado) {
  cidadeSelect.innerHTML = '';

  if (!siglaEstado || !estadosECidades[siglaEstado]) {
    cidadeSelect.disabled = true;
    const opt = document.createElement('option');
    opt.textContent = 'Selecione um estado primeiro';
    opt.value = '';
    cidadeSelect.appendChild(opt);
    return;
  }

  cidadeSelect.disabled = false;
  const optInicial = document.createElement('option');
  optInicial.textContent = 'Selecione uma cidade';
  optInicial.value = '';
  cidadeSelect.appendChild(optInicial);

  estadosECidades[siglaEstado].forEach(cidade => {
    const opt = document.createElement('option');
    opt.value = cidade;
    opt.textContent = cidade;
    cidadeSelect.appendChild(opt);
  });
}

estadoSelect.addEventListener('change', () => {
  const sigla = estadoSelect.value;
  preencherCidades(sigla);
});