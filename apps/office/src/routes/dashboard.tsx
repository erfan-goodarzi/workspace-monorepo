import { createFileRoute } from '@tanstack/react-router';
import { Layout } from '@template/ui';

export const Route = createFileRoute('/dashboard')({
  component: () => <Layout />,
});
