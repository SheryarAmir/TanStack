import React from "react";

const Layout = ({
  /**
   * 📌 Notes on Next.js 13+ (App Router) layouts with slots:
   *
   * - Traditional way: we used to create a `Main` layout component and import subcomponents into it.
   * - In Next.js App Router, we can use **parallel routes** and **slots** (e.g., @folder).
   * - Slots are **not route segments** and don’t affect the URL.
   *
   * ✅ Benefits of slots:
   * - Independent route handling: each slot (e.g., users, revenue, notifications) can have its
   *   own loading and error states.
   * - Granular control: useful if different sections of the page load at different speeds
   *   or encounter unique errors.
   * - Sub-navigation in routes: each slot can act like a mini-application with its own navigation
   *   and state management.
   * - Better UX: users can interact with each section separately (filters, sorting, pagination)
   *   without affecting other parts of the page.
   */

  children,
  notifications,
  users,
  revenue,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-6">{children}</div>

      {/* Dashboard Widgets */}
      <div className="grid grid-cols-12 gap-6 p-6">
        {/* Users Section - Left Side */}
        <div className="col-span-12 md:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-4">{users}</div>
        </div>

        {/* Right Side Widgets */}
        <div className="col-span-12 md:col-span-9 space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-md p-4">
            {notifications}
          </div>

          {/* Revenue */}
          <div className="bg-white rounded-lg shadow-md p-4">{revenue}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
