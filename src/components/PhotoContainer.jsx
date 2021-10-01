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

  const handleContainerClick = (event) => {
    console.log('event', event)
  }

  return (
    <div className={classes.photoContainer} onClick={handleContainerClick}>
      Photo Here
    </div>
  )
}

export default PhotoContainer