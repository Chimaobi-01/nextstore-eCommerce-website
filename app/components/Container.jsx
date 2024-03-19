

const Container = ({children, classname, ltr}) => {
  return (
    <div dir={ltr} className={`p-6 ${classname}`}>{children}</div>
  )
}

export default Container