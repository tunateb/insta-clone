import React from "react";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";

function App() {
  return (
    <div>
      <Header />
      <section className="App-main">
        <Post
          username="Chris"
          avatar="https://unsplash.it/400/400"
          caption="Moving the community"
          image="https://unsplash.it/800/600"
        />
        <Post
          username="OG"
          avatar="https://unsplash.it/400/401"
          caption="Holding a mic"
          image="https://unsplash.it/800/601"
        />
      </section>
    </div>
  );
}

export default App;
