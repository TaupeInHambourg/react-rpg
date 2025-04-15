function Button({ children, variant = 'default', ...props }) {
  let color
  switch (variant) {
    case 'success':
      color = 'bg-green-400 hover:bg-green-500 text-green-50'
      break
    case 'error':
      color = 'bg-red-400 hover:bg-red-500 text-red-50'
      break
    case 'warning':
      color = 'bg-yellow-400 hover:bg-yellow-500 text-yellow-50'
      break
    case 'info':
      color = 'bg-blue-400 hover:bg-blue-500 text-blue-50'
      break
    case 'default':
      color = 'bg-pink-400 hover:bg-pink-500 text-pink-50'
      break
  }
  return (
    <button
      className={`${color} px-4 py-2 rounded-md transition-all duration-200`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
