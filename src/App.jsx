import './App.css'
import About from './Components/About/About'
import FooterGeral from './Components/FooterGeral/FooterGeral'
import HeaderGeral from './Components/HeaderGeral/HeaderGeral'
import IntroductionMy from './Components/IntroductionMy/IntroductionMy'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import ACCAPP from './Components/ImgImagens/ACCAPP.png'

function App() {

  window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
    }

    function topFunction() {
    document.documentElement.scrollTop = 0;
    }

  return (
    <>
      <HeaderGeral />
      <IntroductionMy />
      <About />
      <Skills />
      <div className='divProjects' id='divProjects'>
        <h1>Meus Projetos!</h1>
        <Projects imagem={ACCAPP} nome="ACCAPP" descricao="Um aplicativo de Controle de Obra feito para controle de checklist de serviços de obra, pensado em usabilidade do cliente estando disponíveis desde desktops até Smartwatches, além dos processos de todolisst com varias camadas, o ACC APP contem deshboard de analise dos dados coletados pelo app. feito com html css e js para o front, mysql como baco de dados e c# para API Web." linkP="http://cca-app.mypressonline.com/index.html" linkR="https://github.com/FILIPIMDELAS" image1="https://cdn.icon-icons.com/icons2/112/PNG/512/html5_18891.png" desc1="HTML5" image2="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" desc2="CSS3" image3="https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png" desc3="JS" image4="https://cdn-icons-png.freepik.com/512/6132/6132221.png" desc4="C#" image5="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8db7df3-eed9-477a-9352-1e0f34f31677/de5xpw6-2efaf2a1-29a1-48a5-942e-52579063ef55.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4ZGI3ZGYzLWVlZDktNDc3YS05MzUyLTFlMGYzNGYzMTY3N1wvZGU1eHB3Ni0yZWZhZjJhMS0yOWExLTQ4YTUtOTQyZS01MjU3OTA2M2VmNTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sWwwUjRi7TZvW8Qkk_eWLqXxUrwEPGiJfUd0nQaBTnk" desc5="MYSQL" />
        <Projects imagem="" nome="ACCAPP" descricao="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos"/>
        <Projects imagem="" nome="ACCAPP" descricao="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos"/>
        <Projects imagem="" nome="ACCAPP" descricao="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos"/>
      </div>
      <FooterGeral />

      <button className='GoToTop' id='myBtn' onClick={topFunction}>^</button>
    </>
  )
}

export default App
