import Navbar from "./components/Navbar.jsx";

const App = () => {

    console.log(`test: ${import.meta.env.REACT_APP_IK_URL_ENDPOINT}`);

    return (
    <div className='px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64'>
        {/*NAVBAR*/ }
        <Navbar/>
        {/*BREAdCrumP*/ }
        {/*INTRADUCTION*/ }
        {/*FEtUrE POST*/ }
        {/*POSTLIST*/ }
    </div>
  )
}

export default App