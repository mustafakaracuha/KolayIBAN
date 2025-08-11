function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative">
        <div className="w-12 h-12 border-3 border-gray-200 dark:border-gray-600 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-3 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
