import { CircleCheck } from "lucide-react";

export function Activities() {
    return (
        <div className="space-y-8">

        <div className='space-y-2.5'>
            <div className="flex items-baseline gap-2">
                <span className="text-xl text-zinc-300 font-semibold"> Dia tal</span>
                <span className="text-xs text-zinc-500"> Sábado </span>
            </div>
            <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada
            </p>
        </div>

        <div className='space-y-2.5'>
            <div className="flex items-baseline gap-2">
                <span className="text-xl text-zinc-300 font-semibold"> Dia tal</span>
                <span className="text-xs text-zinc-500"> Sábado </span>
            </div>
            
            <div className="space-y-2.5">
                <div className="bg-zinc-900 rounded-xl shadow-shape px-4 py-2.5 flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300"/>
                    <span className="text-zinc-100">Academia da programação</span>
                    <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
                <div className="bg-zinc-900 rounded-xl shadow-shape px-4 py-2.5 flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300"/>
                    <span className="text-zinc-100">Academia da programação</span>
                    <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
            </div>
        </div>

    </div>
    )
}