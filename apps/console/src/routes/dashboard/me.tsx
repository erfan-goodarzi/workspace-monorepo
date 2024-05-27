import { createFileRoute } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/me')({
  component: () => (
    <div>
      Hello /dashboard/me! <Outlet />
    </div>
  ),
});
