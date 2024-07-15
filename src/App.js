import Matching from "./Component/Matching";
import Mypage from "./Component/Mypage"
import Gptpage from "./Component/Gptpage";
import Chat from "./Component/Chat"
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Matching/>}></Route>
        <Route path="/mypage" element={<Mypage/>}></Route>
        <Route path="/gpt" element={<Gptpage/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
