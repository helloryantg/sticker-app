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

function Header(props) {
  const { handleChange } = props

  const classes = useStyles()

  return (
    <div className={classes.header}>
      <input type="file" onChange={handleChange} />
    </div>
  )
}

export default Header