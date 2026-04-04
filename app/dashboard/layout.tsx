export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 h-screen">
      
      {/* Sidebar */}
      <div className="bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>

        <ul className="space-y-6 text-sm font-bold">
          <li><a href="/dashboard/clients">Clients</a></li>
          <li><a href="/dashboard/produits">Produits</a></li>
          <li><a href="/dashboard/category">Category</a></li>
          <li><a href="/dashboard/commandes">Commandes</a></li>
        </ul>
      </div>

      {/* Contenu */}
      <div className="col-span-3 p-6">
        {children}
      </div>

    </div>
  );
}