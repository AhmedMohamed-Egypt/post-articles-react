import Modal from './components/Modal';
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import TopBar from './components/TopBar';
import { PostProvider } from './Context/PostContext';
import Container from './UI/Container';

function App() {
  return (
    <div className="App">
      <PostProvider>
      <Container>
      <TopBar/>
      <AddPost/>
      <Posts/>
      </Container>
      </PostProvider>
      
   
     
    </div>
  );
}

export default App;
