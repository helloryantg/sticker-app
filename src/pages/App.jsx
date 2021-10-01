import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import Header from '../components/Header'
import PhotoContainer from '../components/PhotoContainer'
import EmojiContainer from '../components/EmojiContainer'

const useStyles = makeStyles({
  app: {
    height: '100%',
  }
})

function App() {
  const classes = useStyles()

  const [sliderValue, setSliderValue] = useState(50)

  const handleSliderChange = (event, value) => {
    setSliderValue(value)
  }

  return (
    <div className={classes.app}>
      <Header />
      <PhotoContainer sliderValue={sliderValue} />
      <EmojiContainer sliderValue={sliderValue} handleSliderChange={handleSliderChange} />
    </div>
  )
}

export default App
