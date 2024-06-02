const Layout = ({children}: {children: React.ReactNode}) => {
  return(
    <div className="h-full flex items-center justify-center bg-zinc-100">
      
        {children}
    </div>
  );

}
export default Layout;