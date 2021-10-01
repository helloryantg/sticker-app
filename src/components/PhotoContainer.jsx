import { makeStyles } from '@material-ui/core/styles'

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

  return (
    <div className={classes.photoContainer}>
      Photo Container
    </div>
  )
}

export default PhotoContainer