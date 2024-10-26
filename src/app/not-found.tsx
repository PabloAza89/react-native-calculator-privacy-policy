import s from "./error.module.css";

const Error = () => {
  return (
    <div
      className={s.background}
      children={ // eslint-disable-line
        <div>
          <h1 className={s.left} children={'404'} /* eslint-disable-line */ />
          <div
            className={s.right}
            children={ <h2 className={s.rightInner} children={'This page could not be found.'} /> } // eslint-disable-line
          />
        </div>
      }
    />
  )
}

export default Error;