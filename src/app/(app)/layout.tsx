import { PropsWithChildren } from "react"
import { MainLayout } from "~/components/common/MainLayout"

export default async function AppLayout({ children }: PropsWithChildren) {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainLayout>
        {children}
      </MainLayout>
    </div>
  )
}