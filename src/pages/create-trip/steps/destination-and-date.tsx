import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateProps {
    isGuestsInputVisible: boolean
    hideGuestsInput: () => void
    showGuestsInput: () => void
}

export function DestinationAndDate (props: DestinationAndDateProps){
    return (
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
            
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400'/>
              <input disabled={props.isGuestsInputVisible} type="text" placeholder="Para onde você vai?" className="flex-1 pr-4 bg-transparent text-lg placeholder-zinc-400 outline-none"/>
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400'/>
              <input disabled={props.isGuestsInputVisible} type="text" placeholder="Quando? " className="w-32 bg-transparent text-lg placeholder-zinc-400 outline-none pr-4"/>
            </div>

            <div className='w-px h-6 bg-zinc-800 mr-4'></div>

            {
              props.isGuestsInputVisible? (
                <Button onClick={props.hideGuestsInput} colors='secondary'>
                  Alterar local/data
                  <Settings2 className='size-5'/>
                </Button>
              ) : (
                <Button onClick={props.showGuestsInput} colors='primary'>
                  Continuar
                  <ArrowRight className='size-5'/>
                </Button>
              )
            }
          </div>

    )
}