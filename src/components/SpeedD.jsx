import {
    CogIcon,
    EnvelopeIcon,
    EnvelopeOpenIcon,
    HomeIcon,
    Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import {
    IconButton,
    SpeedDial,
    SpeedDialAction,
    SpeedDialContent,
    SpeedDialHandler,
} from "@material-tailwind/react";

const SpeedD = () => {
  return (
    <div className="relative w-full h-80">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <EnvelopeOpenIcon className="hidden h-5 w-5 group-hover:block" />
              <EnvelopeIcon className="block h-5 w-5 group-hover:hidden" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction>
              <HomeIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <CogIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <Square3Stack3DIcon className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  )
}

export default SpeedD