import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-red-500">Oops! This page is not available</h1>
      <p className="mt-2 text-lg text-gray-700">The page you are looking for is not available.</p>
      <button 
        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700" 
        onClick={() => navigate(-1)}
      >
        Back Home
      </button>
    </div>
  )
}