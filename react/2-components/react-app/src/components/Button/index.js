const Button = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      className={`btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button