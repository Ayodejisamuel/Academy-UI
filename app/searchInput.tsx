import styles from './page.module.css'


const SearchInput = (props : any) => {


    return (
        <div className={styles.searchinputdiv}>
          <input
            name="search"
            value={props.searchData}
            onChange={(event) => {
            
              props.setDataValue(event.target.value);
            }}
            className={styles.inputi}
            placeholder="search for Courses..."
          ></input>
        </div>)
}

export default SearchInput;