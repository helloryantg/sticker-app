import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  emojiContainer: {
    height: '200px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function EmojiContainer() {
  const classes = useStyles()

  const onSliderChange = (event, value) => {
    console.log('value', value)
  }

  return (
    <div className={classes.emojiContainer}>
       <Box width={300}>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={onSliderChange} />
      </Box>
    </div>
  )
}

export default EmojiContainer