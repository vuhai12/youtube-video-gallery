import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Library from "./pages/Library/Library";
import History from "./pages/History/History";
import WatchLater from "./pages/WatchLater/WatchLater";
import LikedVideos from "./pages/LikedVideos/LikedVideos";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/subscriptions" element={<Subscriptions />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/watch-later" element={<WatchLater />} />
                  <Route path="/liked-videos" element={<LikedVideos />} />
                </Routes>
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
