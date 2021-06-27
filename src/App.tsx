import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <Router>
      <Sidebar />
      <Topbar />
      <Main />
    </Router>
  );
}

export default App;
