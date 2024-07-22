import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { DateRange, DayPicker } from "react-day-picker";
import { useState } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

interface DestinationAndDateProps {
    isGuestsInputVisible: boolean
    eventStartAndEndDates: DateRange | undefined;
    hideGuestsInput: () => void
    showGuestsInput: () => void
    setDestination: (destination: string) => void;
    setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}

export function DestinationAndDate (props: DestinationAndDateProps){
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayedDate = props.eventStartAndEndDates && props.eventStartAndEndDates.from && props.eventStartAndEndDates.to 
  ? format(props.eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(props.eventStartAndEndDates.to, "d' de 'LLL"))
  : null

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
            
      <div className='flex items-center gap-2 flex-1'>
        <MapPin className='size-5 text-zinc-400'/>
        <input disabled={props.isGuestsInputVisible} type="text" placeholder="Para onde você vai?" className="flex-1 pr-4 bg-transparent text-lg placeholder-zinc-400 outline-none" onChange={event => props.setDestination(event.target.value)}/>
      </div>

      <button disabled={props.isGuestsInputVisible} onClick={openDatePicker} className="flex items-center gap-2 text-left w-[240px]">
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1"> {displayedDate || 'Quando'} </span>
      </button>

      { 
        isDatePickerOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="font-lg font-semibold">Selecione a data</h2>
                  <button>
                    <X className="size-5 text-zinc-400" onClick={closeDatePicker} />
                  </button>
                </div>
              </div>      

              <DayPicker mode="range" selected={props.eventStartAndEndDates} onSelect={props.setEventStartAndEndDates} />
            
            </div>
          </div>
        )
      }


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