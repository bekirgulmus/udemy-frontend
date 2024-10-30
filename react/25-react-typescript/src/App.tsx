// import { Home } from './components/Home.tsx'
// import { Instructor } from "./components/Instructor.tsx";
// import { InstructorList } from "./components/InstructorList.tsx";
// import { Request } from "./components/Request.tsx";
// import { EventActions } from "./components/EventActions.tsx";
// import { LoginCheck } from "./components/LoginCheck.tsx";
// import './App.css'
// import { ReducerExample } from "./components/ReducerExample.tsx";
// import { ContextExample } from "./components/ContextExample.tsx";
// import { ThemeProvider } from "./components/ThemeContext.tsx";
import { RefExample } from "./components/RefExample.tsx";

function App() {
  // const instructor = {
  //   firstName: 'Can',
  //   lastName: 'Boz'
  // }
  //
  // const instructorList = [
  //   {
  //     firstName: 'Can',
  //     lastName: 'Boz'
  //   },
  //   {
  //     firstName: 'Osman',
  //     lastName: 'Boz'
  //   },
  // ]

  return (
    <>
      {/*<Home name="Can Boz" courseNumber={5} isBest={true}/>*/}
      {/*<Instructor instructorNameLastName={instructor} />*/}
      {/*<InstructorList instructorNameLastNameList={instructorList} />*/}
      {/*<Request status="success"/>*/}
      {/*<EventActions/>*/}
      {/*<LoginCheck/>*/}
      {/*<ReducerExample/>*/}
      {/*<ThemeProvider>*/}
      {/*  <ContextExample/>*/}
      {/*</ThemeProvider>*/}
      <RefExample/>
    </>
  )
}

export default App
