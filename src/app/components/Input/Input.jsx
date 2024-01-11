import styles from './styles.module.css'

const Input = ({placeholder, type, name}) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} name={name} required/>
  )
}

export default Input