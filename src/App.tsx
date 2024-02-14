import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"



function App() {

  return (
    <>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>

    </div>
    <div className="App-Mobile font-inter w-full h-screen">
				<p className="h-full flex flex-col justify-center items-center text-center">
					Website can't be viewed on a mobile device. Please use PC/Mac.
				</p>
			</div>
			<style>
				{`
            @media only screen and (max-width: 1200px) {
                .App {
                    display: none;
                }
               .App-Mobile {
									 display: block;
							 }
            }

						@media only screen and (min-width: 1201px) {
							.App {
									display: block;
							}
						 .App-Mobile {
								 display: none;
						 }
					}
        `}
			</style>
    </>
    
    
  )
}

export default App
