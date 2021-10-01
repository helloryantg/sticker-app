import { makeStyles } from '@material-ui/core/styles'
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

  return (
    <div className={classes.app}>
      <Header />
      <PhotoContainer />
      <EmojiContainer />
    </div>
  )
}

export default App
