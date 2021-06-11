import GameProvider from "./context/GameProvider";
import Game from "./modules/components/Game";
import Layout from "./modules/shared/Layout";

function App() {
  return (
    <GameProvider>
      <Layout>
        <Game />
      </Layout>
    </GameProvider>
  );
}

export default App;
