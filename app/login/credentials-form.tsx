import { credentialsSignIn } from "../lib/actions/auth"


export default function CredentialsForm() {
  return (
    <form
      className="flex flex-col gap-4 items-center justify-center"
      action={credentialsSignIn}
    >
      <div className="flex flex-col">
        <label className="text-gray-500" htmlFor="name">name</label>
        <input
          className={[
            `rounded leading-8 text-lg px-2 py-0.5 bg-transparent border placeholder:text-neutral-500 border-gray-700 max-w-60`,
            `focus:outline-none`,
            `focus:border-gray-400`,
          ].join(' ')}
          type="text"
          id="name"
          name="name"
          placeholder="Your unique name"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-500" htmlFor="password">password</label>
        <input
          className={[
            `rounded leading-8 text-lg px-2 py-0.5 bg-transparent border placeholder:text-neutral-500 border-gray-700 max-w-60`,
            `focus:outline-none`,
            `focus:border-gray-400`,
          ].join(' ')}
          type="text"
          id="password"
          name="password"
          placeholder="Your secure password"
        />
      </div>
      <div className="flex pt-12">
        <button
          className="py-2 inline-block min-w-[150px] px-2.5 rounded-md bg-neutral-700 hover:bg-neutral-600 transition"
          type="submit"
        >
          send
        </button>
      </div>
    </form>
  )
}
