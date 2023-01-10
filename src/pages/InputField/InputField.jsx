import styles from './InputField.module.css'

const InputField = ({ movie, handleInput, handleSubmit }) => {
    return (
        <form autoComplete="off" onSubmit={(e) => handleSubmit(e.target.elements.searchMovie.value)}>
            <input type="text" className={styles.input} onChange={(e) => handleInput(e.target.value)} value={movie} name="searchMovie" placeholder="search"/>
      {/* <button type="submit" >Submit</button> */}
    </form>
    )
}

export default InputField