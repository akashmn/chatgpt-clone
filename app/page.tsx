import { BoltIcon } from '@heroicons/react/20/solid'
import { SunIcon } from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className='flex space-x-2 text-center gap-2'>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use.</p>
            <p className="infoText"> Messages are stored in Fireabse.</p>
            <p className="infoText">Toast Notidation when ChatGPT is thinking!</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Bolt Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabalities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me."</p>
            <p className="infoText">"What is the difference between a Dog and a Cat?"</p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Exclamation Icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">May ocassionally generate incorrect info.</p>
            <p className="infoText">May ocassionally generate harmful or biased content.</p>
            <p className="infoText">Limited knowledge of the world after 2021.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page