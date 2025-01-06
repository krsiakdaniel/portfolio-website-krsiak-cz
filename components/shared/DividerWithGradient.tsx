const DividerWithGradient = () => {
  return (
    <div className="my-4 flex w-full items-center justify-between">
      <span role="img" aria-label="sun" className="text-2xl">
        ☀️
      </span>
      <div className="mx-2 h-1 w-full flex-1 bg-gradient-to-r from-yellow-400 via-sky-300 to-green-500"></div>
      <span role="img" aria-label="tree" className="text-2xl">
        🌲🌲
      </span>
      <span role="img" aria-label="man-walking" className="animate-walk text-2xl">
        🚶‍♂️
      </span>
      <span role="img" aria-label="tree" className="text-2xl">
        🌲🌲
      </span>
      <div className="mx-2 h-1 w-full flex-1 bg-gradient-to-r from-green-500 via-blue-700 to-gray-800"></div>
      <span role="img" aria-label="moon" className="text-2xl">
        🌔
      </span>
    </div>
  )
}

export default DividerWithGradient
