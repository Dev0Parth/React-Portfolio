import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";


const AppDiv = styled.div`

  background: #000000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align: center;

  & > *:last-child {
    margin-top: 2rem;
    font-size: 2rem;
    color: #3FC1A9;
  }
`


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <AppDiv>

      {
        loading ?
          (
            <Loading>
              <CircleLoader color={'#3FC1A9'} loading={loading} size={150} />
              <h5>Loading...</h5>
            </Loading>
          ) :
          (
            <>
              <GlobalStyle />
              <ThemeProvider theme={LightTheme}>

                <Routes>
                  <Route exact path="/" element={<Main />} />
                  <Route exact path="/about" element={<AboutPage />} />
                  <Route exact path="/blog" element={<BlogPage />} />
                  <Route exact path="/work" element={<WorkPage />} />
                  <Route exact path="/skills" element={<MySkillsPage />} />
                </Routes>

              </ThemeProvider>
            </>
          )
      }
    </AppDiv>
  );
}

export default App;
