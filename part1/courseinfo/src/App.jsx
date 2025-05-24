import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const content = {
    course: 'Half Stack application development',
    content1: {
      part: 'Fundamentals of React',
      exercises: 10 
    },
    content2: {
      part: 'Using props to pass data',
      exercises: 7
    },
    content3: {
      part: 'State of a component',
      exercises: 14
    }
  }

  return (
    <div>
      <Header {...content}/>
      <Content {...content}/>
      <Total  {...content}/>
    </div>
  )
}

export default App
