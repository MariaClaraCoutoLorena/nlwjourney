import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GuestsModal } from './guests-modal'
import { ConfirmationModal } from './confirmation-modal'
import { DestinationAndDate } from './steps/destination-and-date'
import { InviteGuests } from './steps/invite-guests'

export function CreateTripPage() {
const navigate = useNavigate()
  const [isGuestsInputVisible, setIsGuestsInputVisible] = useState(false)
  const [isGuestsModalVisible, setIsGuestsModalVisible] = useState(false)
  const [emailsToInvite, setEmailsToInivte] = useState(Array<string>)
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] = useState(false)

  function showGuestsInput() {
    setIsGuestsInputVisible(true)
  }

  function hideGuestsInput() {
    setIsGuestsInputVisible(false)
  }

  function showGuestsModal() {
    setIsGuestsModalVisible(true)
  }

  function hideGuestsModal() {
    setIsGuestsModalVisible(false)
  }

  function showConfirmationModal() {
    setIsConfirmationModalVisible(true)
  }

  function hideConfirmationModal() {
    setIsConfirmationModalVisible(false)
  }

  function addEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()
    if(!email || emailsToInvite.includes(email)) { return }
    setEmailsToInivte([
      ...emailsToInvite,
      email
    ])
    event.currentTarget.reset()
  }

  function removeEmailToInvite(emailRemove: String){
    setEmailsToInivte(emailsToInvite.filter(email => email !== emailRemove))
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate("/trips/123");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-blacksquares bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/Logo.png" alt="logo plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>
            <DestinationAndDate
                isGuestsInputVisible={isGuestsInputVisible}
                hideGuestsInput={hideGuestsInput}
                showGuestsInput={showGuestsInput}
            />

          {
            isGuestsInputVisible && (
                <InviteGuests 
                    showGuestsModal={showGuestsModal}
                    emailsToInvite={emailsToInvite}
                    showConfirmationModal={showConfirmationModal}
                />
            )
          }
        </div>

        <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
        com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.</p>
      
      </div>

      {
        isGuestsModalVisible && (
            <GuestsModal
                hideGuestsModal={hideGuestsModal}
                emailsToInvite={emailsToInvite}
                addEmailToInvite={addEmailToInvite}
                removeEmailToInvite={removeEmailToInvite}
            />
        )
      }

      {
        isConfirmationModalVisible && (
            <ConfirmationModal 
                hideConfirmationModal={hideConfirmationModal}
                createTrip={createTrip}
            />
        )
      }

    </div> 
  )
}