import s from "./error.module.css";

const Error = () => {
  return (
    <div className={s.background}>
      <div>
        <h1 className={s.left}>
          404
        </h1>
        <div className={s.right}>
          <h2 className={s.rightInner}>
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Error;