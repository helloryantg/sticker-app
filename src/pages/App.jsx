import { makeStyles } from '@material-ui/core/styles'
import { useState, useRef } from 'react'
import Header from '../components/Header'
import PhotoContainer from '../components/PhotoContainer'
import EmojiContainer from '../components/EmojiContainer'
import html2canvas from 'html2canvas'

const useStyles = makeStyles({
  app: {
    height: '100%',
  }
})

function App() {
  const classes = useStyles()
  const printRef = useRef()

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

  // const saveAs = (blob, fileName) => {
  //   const element = window.document.createElement('a')
  //   element.href = blob
  //   element.download = fileName
  //   element.style = 'display:none;'

  //   (document.body || document.documentElement).appendChild(element)

  //   if (typeof element.click === 'function') {
  //     element.click()
  //   } else {
  //     element.target = '_blank'
  //     element.dispatchEvent(new MouseEvent('click', {
  //       view: window,
  //       bubbles: true,
  //       cancelable: true
  //     }))
  //     URL.revokeObjectURL(element.href)
  //     element.remove()
  //   }
  // }

  const handleSave = async () => {
    console.log('handle save clicked')

    const element = printRef.current
    const canvas = await html2canvas(element)

    const data = canvas.toDataURL('image/jpg')
    const link = document.createElement('a')

    if (typeof link.download === 'string') {
      link.href = data
      link.download = 'image.jpg'

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      window.open(data)
    }

    // const html = document.getElementsByTagName('HTML')[0]
    // const body = document.getElementsByTagName('BODY')[0]
    // const htmlWidth = html.clientWidth
    // const bodyWidth = body.clientWidth
    // const data = document.getElementById('photoContainer')
    // const newWidth = data.scrollWidth - data.clientWidth

    // if (newWidth > data.clientWidth) {
    //   htmlWidth += newWidth
    //   bodyWidth += newWidth
    // }

    // html.style.width = htmlWidth + 'px'
    // body.style.width = bodyWidth + 'px'

    // const canvas = await html2canvas(data)
    // const image = canvas.toDataURL('image/png', 1.0)
    // const fileName = 'random_name.png'
    // saveAs(image, fileName)
    

    // const photoContainer = document.getElementById('photoContainer')
    // console.log('photo container', photoContainer)

    // html2canvas(photoContainer).then((canvas) => {
    //   console.log('canvas', canvas)
    //   document.body.appendChild(canvas)
    // })
  }

  return (
    <div className={classes.app}>
      <Header handleChange={handleChange} />
      <PhotoContainer 
        photoFile={photoFile} 
        emojiList={emojiList}
        handleContainerClick={handleContainerClick}
        printRef={printRef} 
      />
      <EmojiContainer 
        sliderValue={sliderValue} 
        handleSliderChange={handleSliderChange} 
        clearEmojis={() => setEmojiList([])} 
        handleSave={handleSave}
      />
    </div>
  )
}

export default App
