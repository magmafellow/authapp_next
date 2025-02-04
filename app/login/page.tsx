import CredentialsForm from "./credentials-form";

export default function Page() {
  return (
    <div className="h-screen text-[#fff] bg-neutral-950 flex justify-center items-center w-full">
      <div className="rounded-xl border border-neutral-300 h-[50dvh] w-2/3 max-w-[700px]">
        <h1 className="text-center font-medium mb-20 text-2xl py-4">Sign in</h1>
        <CredentialsForm />
      </div>
    </div>
  )
}