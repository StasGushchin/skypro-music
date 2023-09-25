import './App.css';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import NavMenu from './components/NavMenu/NavMenu';
import Sidebar from './components/Sidebar/Sidebar';
import Tracklist from './components/Tracklist/Tracklist';



function App() {
  return (
<html lang="ru">
  <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="css/style.css" />
    <title>Skypro</title>
  </head>
  <body>
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu/>
          <Tracklist/>
          <Sidebar/>
        </main>
          <AudioPlayer/>
        <footer className="footer"/>
      </div>
    </div>
  </body>
</html>
  );
}

export default App;