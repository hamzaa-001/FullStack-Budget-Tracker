import { SignUp } from "@clerk/nextjs";
export default function Page() {
  return (
    <section className="bg-[#F1F5F9] min-h-[100vh]">
      <div className="">
        <main className="flex items-center justify-center p-10">
          <SignUp signUpForcedRedirect />
        </main>
      </div>
    </section>
  );
}
