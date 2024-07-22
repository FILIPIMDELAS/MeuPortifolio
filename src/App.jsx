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
        <Projects imagem={ACCAPP} nome="ACCAPP" descricao="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos" link="http://cca-app.mypressonline.com/index.html"/>
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
