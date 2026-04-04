import Link from "next/link";

export default function notFound() {
    return (
        <div className="flex justify-center h-screen items-center">
            <div className="space-y-5">
                <h1 className="font-bold text-3xl">Erreur 400:</h1>
                <p>La page que vous cherche introuvable !</p>
                <Link href={"/"}>
                <button className="border  rounded-xl p-2 bg-blue-500 cursor-pointer hover:bg-blue-400 text-white text-sm font-bold">
                    Retourner
                </button>
                </Link>
                
            </div>

        </div>
    )
}