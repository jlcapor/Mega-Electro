import AccountLayout from "./_components/screens/account-layout"

interface AccountLayoutProps {
  dashboard?: React.ReactNode
}
export default function AccountPageLayout({dashboard} : AccountLayoutProps) {
  return (
    <AccountLayout>
      {dashboard}
    </AccountLayout>
  )
}
