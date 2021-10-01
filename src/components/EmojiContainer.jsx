import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const useStyles = makeStyles({
  emojiContainer: {
    height: '200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unicornContainer: {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unicorn: {
    fontSize: ({ sliderValue }) => `${sliderValue}px`,
  }
})

function EmojiContainer(props) {
  const { sliderValue, handleSliderChange } = props

  const classes = useStyles({ sliderValue })

  return (
    <div className={classes.emojiContainer}>
      <Box width={300}>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={handleSliderChange} min={20} max={120} />
      </Box>
      <div className={classes.unicornContainer}>
        <div className={classes.unicorn}>🦄</div>
      </div>
    </div>
  )
}

export default EmojiContainer