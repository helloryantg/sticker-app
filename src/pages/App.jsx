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
  const [photoFile, setPhotoFile] = useState(null)
  const [emojiList, setEmojiList] = useState([])

  const handleSliderChange = (event, value) => {
    setSliderValue(value)
  }

  const handleChange = (event) => {
    const file = URL.createObjectURL(event.target.files[0])
    setPhotoFile(file)
  }

  const handleContainerClick = (event) => {
    const hasFileBeenUploaded = Boolean(photoFile)

    if (!hasFileBeenUploaded) {
      return
    }

    const emoji = { fontSize: `${sliderValue}px`, position: 'absolute', left: `${event.pageX - 40}px`, top: `${event.pageY - 40}px` }

    // access top and bottom borders and compare current emoji size to see if it will fit

    setEmojiList([...emojiList, emoji])
  }

  return (
    <div className={classes.app}>
      <Header handleChange={handleChange} />
      <PhotoContainer 
        photoFile={photoFile} 
        emojiList={emojiList}
        handleContainerClick={handleContainerClick} 
      />
      <EmojiContainer 
        sliderValue={sliderValue} 
        handleSliderChange={handleSliderChange} 
        clearEmojis={() => setEmojiList([])} />
    </div>
  )
}

export default App
