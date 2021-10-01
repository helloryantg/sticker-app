import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  emoji: {
    fontSize: props => props.fontSize,
    position: 'absolute',
    left: props => props.left,
    top: props => props.top,
  }
})

function Emoji(props) {
  const classes = useStyles(props)

  console.log('props', props)

  return (
    <div className={classes.emoji}>
      🦄
    </div>
  )
}

export default Emoji