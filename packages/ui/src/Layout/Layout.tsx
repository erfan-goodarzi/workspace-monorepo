import { Outlet } from '@tanstack/react-router';

export const Layout = () => {
  return (
    <div style={{ margin: 20 }}>
      <div
        style={{
          background: 'orange',
          padding: 20,
          borderRadius: 8,
          textAlign: 'center',
        }}
      >
        Dashboard
      </div>
      <Outlet />
    </div>
  );
};
