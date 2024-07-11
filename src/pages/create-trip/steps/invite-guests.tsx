import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsProps{
    showGuestsModal: () => void
    emailsToInvite: string[]
    showConfirmationModal: () => void
}

export function InviteGuests (props: InviteGuestsProps) {
    return (
        
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
                
        <button onClick={props.showGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
          <UserRoundPlus className='size-5 text-zinc-400'/>
            {
              props.emailsToInvite.length>0? (
                <span className='text-zinc-100 text-lg flex-1'>
                  {props.emailsToInvite.length} pessoa(s) convidada(s)
                </span>
              ) : (
                <span className='text-zinc-400 text-lg flex-1'>
                  Quem estará na viagem?
                </span>
              )
            }
            
        </button>
        
        <Button onClick={props.showConfirmationModal} colors="primary">
          Confirmar Viagem
          <ArrowRight className='size-5'/>
        </Button>

      </div>
    )
}