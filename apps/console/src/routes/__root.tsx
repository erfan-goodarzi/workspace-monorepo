import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Root = () => {
  return <Outlet />;
};

export const Route = createRootRoute({
  component: Root,
});
