import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { Button } from './ui/button';

interface MeetingSetupProps {
  setIsSetupComplete: Dispatch<SetStateAction<boolean>>
}

const MeetingSetup = ({setIsSetupComplete}: MeetingSetupProps) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState<boolean>(false);
  const call = useCall();

  if(!call) throw new Error("useCall hook must be used within the StreamCall component")

  useEffect(() => {
    if(isMicCamToggledOn) {
      call?.microphone.disable();
      call?.camera.disable();
    } else {
      call?.microphone.enable();
      call?.camera.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone])
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
        <h1 className='text-2xl font-bold'>Setup</h1>
        <VideoPreview />
        <div className='flex h-16 items-center justify-center gap-3'>
          <label className='flex items-center justify-center gap-2 font-medium'>
            <input type='checkbox' checked={isMicCamToggledOn} onChange={(event) => {
              setIsMicCamToggledOn(event.target.checked)
            }} />
              Join with microphone and camera off 
          </label>
          <DeviceSettings />
        </div>
        <Button className='rounded-md bg-green-500 px-4 py-2.5' onClick={() => {
          call.join();
          setIsSetupComplete(true)
        }}>
            Join meeting
        </Button>
    </div>
  )
}

export default MeetingSetup