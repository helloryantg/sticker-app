import React from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Emoji from './Emoji'

const useStyles = makeStyles({
  photoContainer: {
    height: '50%',
    width: '100%',
    backgroundColor: 'aliceblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function PhotoContainer() {
  const classes = useStyles()

  const [emojiList, setEmojiList] = useState([])

  const handleContainerClick = (event) => {
    console.log('event', event)
    const emoji = { fontSize: '70px', position: 'absolute', left: `${event.pageX - 40}px`, top: `${event.pageY - 40}px` }
    setEmojiList([...emojiList, emoji])
  }

  return (
    <div className={classes.photoContainer} onClick={handleContainerClick}>
      {emojiList.map((emoji, index) => {
        return <Emoji key={index} {...emoji} />
      })}
      Photo Here
    </div>
  )
}

export default PhotoContainer