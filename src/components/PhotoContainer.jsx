import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Emoji from './Emoji'

const useStyles = makeStyles({
  photoContainer: {
    height: '50%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: 'auto',
  }
})

function PhotoContainer(props) {
  const { photoFile, handleContainerClick, emojiList, printRef } = props

  const classes = useStyles()

  return (
    <div ref={printRef} id="photoContainer" className={classes.photoContainer} onClick={handleContainerClick}>
      {emojiList.map((emoji, index) => {
        return <Emoji key={index} {...emoji} />
      })}
      <img className={classes.image} src={photoFile} alt="empty" />
    </div>
  )
}

export default PhotoContainer