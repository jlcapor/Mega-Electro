import AccountNav from "../account-nav/AccountNav";

interface AccountLayoutProps {
    children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
    children,
  }) => {
  return (
    <div className="flex-1 small:py-12">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto flex flex-col">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] py-12">
          <div>{true && <AccountNav/>}</div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AccountLayout;
