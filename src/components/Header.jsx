import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  header: {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }  
})

function Header() {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      Title Here
    </div>
  )
}

export default Header