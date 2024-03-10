export function Loading() {
  return (
    <>
      <main className='h-[70vh] p-4 mx-6 my-4 flex items-start flex-col gap-4 justify-center bg-gray-200 rounded-md'>
        <section className='w-full h-[30vh] bg-gray-400 rounded-md p-4'>
          <div className='w-full h-full bg-gray-500 rounded-lg mb-5 animate-pulse '></div>
        </section>

        <section className='w-full h-[70vh] bg-gray-400 rounded-md p-4'>
          <div className='w-[25%] h-[5vh] bg-gray-500 rounded-lg mb-5 animate-pulse'></div>
          <div className='w-[45%] h-[5vh] bg-gray-500 rounded-lg mb-5 animate-pulse'></div>
          <div className='w-[65%] h-[5vh] bg-gray-500 rounded-lg mb-5 animate-pulse'></div>
          <div className='w-[75%] h-[5vh] bg-gray-500 rounded-lg mb-5 animate-pulse'></div>
          <div className='w-[85%] h-[5vh] bg-gray-500 rounded-lg mb-5 animate-pulse'></div>
        </section>
      </main>
    </>
  )
}
