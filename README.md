# Projeto Agencia Bold - Danki-Code

Projeto desenvolvido como parte da trilha de estudos em HTML, CSS e JavaScript (com jQuery), seguindo o curso da Danki Code. O foco foi criar uma landing page responsiva para uma agência fictícia.

## Designer do projeto

- Designer: <a href="https://xd.adobe.com/view/d9f79e73-0240-4ade-867e-7e07b8bf994a-8ca4/specs/" target="_blank">link</a>

## 🧠 Objetivos do Projeto

- Praticar HTML, CSS e JavaScript com base em um layout real
- Entender o uso do jQuery e plugins como Slick
- Aplicar fundamentos de responsividade e menu mobile
- Aprender a utilizar o Docker com Nginx para servir conteúdo estático

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla e jQuery)
- [Slick Carousel](https://kenwheeler.github.io/slick/) (para o carrossel de depoimentos)
- Docker (apenas para ajudar no desenvolvimento academico)

## 📱 Funcionalidades

- Layout 100% responsivo
- Carrossel de depoimentos com Slick
- Menu mobile interativo com JavaScript puro
- Separação de código em pastas organizadas

## 📂 Estrutura do Projeto

agencia-bold/
│
├── docker-compose.yml
├── nginx/
│ └── default.conf
├── site/
│ ├── index.html
│ └── assets/
│ ├── css/
| | └── style.css
│ ├── js/
| | └── script.js
│ └── img/

## ⚙️ Como Executar Localmente

> É necessário ter o Docker instalado em sua máquina.
> caso não queira usar o Docker faça o clone dos arquivos e descarte a pasta nginx/ , o arquivo docker-compose.yml e ignore o passo 2

1. Clone o repositório:

```bash
git clone https://github.com/ismaeljsantos/agencia-bold.git
cd agencia-bold
```

2. Suba o container com Docker:

```bash
    docker-compose up -d
```

3. Acesse no navegador:
   `http://localhost:8080`

## 📌 Melhorias Futuras (já mapeadas)

- Separar scripts de jQuery dos scripts de JS puro
- Adicionar transições suaves ao menu mobile
- Incluir atributos de acessibilidade (ARIA)
- Adicionar preview animado (GIF ou vídeo)
- Minificar CSS e JS para produção

## 🧾 Licença

Este projeto é apenas para fins educacionais e de portfólio. Sinta-se à vontade para estudar, modificar e adaptar conforme necessário.

Desenvolvido com 💻 por Ismael J. Santos
