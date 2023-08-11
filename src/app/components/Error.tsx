export default function ErrorDisplay() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Something went wrong.</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We are trying to sort out the problem, please try again later.
        </p>
      </div>
    </div>
  )
}